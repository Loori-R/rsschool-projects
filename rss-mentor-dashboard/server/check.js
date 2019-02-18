const fs = require('fs');
const readline = require('readline');
const _ = require('lodash');
const { google } = require('googleapis');
const sheets = require('./utils/sheets.js');
const time = require('./utils/time.json');

// If modifying these scopes, delete token.json.
const SCOPES_DRIVE = ['https://www.googleapis.com/auth/drive.metadata.readonly', 'https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH_DRIVE = 'server/tokens/token.json';

// Load client secrets from a local file.
fs.readFile('server/tokens/credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize_drive(JSON.parse(content), listFiles);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize_drive(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH_DRIVE, (err, token) => {
    if (err) return getAccessToken_drive(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken_drive(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES_DRIVE,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH_DRIVE, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH_DRIVE);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */

const ready = {}

const getFile = (drive, fileId, name) => {
  drive.files.get({
    fileId: fileId,
    fields: "modifiedTime"
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const infoFile = res.data;
    if (infoFile.hasOwnProperty('modifiedTime')) {
      const check = time[name] == infoFile.modifiedTime
      ready[name] = infoFile.modifiedTime
      if (check) {
        console.log('not changed: ' + infoFile.modifiedTime)
        return
      } else {
        console.log('has changed: ' + infoFile.modifiedTime)
        sheets.getAllTable()
      }
      fs.writeFileSync("server/utils/time.json", JSON.stringify(ready), 'utf-8')
    } else {
      console.log('No files or property found.');
    }
  });
}
function listFiles(auth) {
  if (!fs.existsSync("server/output.json")) { sheets.getAllTable() }
  const drive = google.drive({ version: 'v3', auth });
  getFile(drive, '1lwlSNNhvYTu0zWxUYUPRTyEnBYWJ0UaDBx48p_MQsK8', 'tasks')
  getFile(drive, '1-HYzpnEYpIsv5qSSuSZCgKf5-mYnG0T3Xt864Hhdnew', 'pairs')
  getFile(drive, '18exMEOWGKsMPggt0t3yU-MR1gvX3OFBDqKCvdNy8rAU', 'scores')
}