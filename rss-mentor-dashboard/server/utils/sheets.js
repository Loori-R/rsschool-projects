const fs = require('fs');
const readline = require('readline');
const _ = require('lodash');
const { google } = require('googleapis');
module.exports.getAllTable = () => {
  const readyTable = {
    info_task: [], pairs: [], mentor_info: [], ready_tasks: []
  }
  // If modifying these scopes, delete token.json.
  const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  // The file token.json stores the user's access and refresh tokens, and is
  // created automatically when the authorization flow completes for the first
  // time.
  const TOKEN_PATH = 'server/tokens/token.json';

  // Load client secrets from a local file.
  fs.readFile('server/tokens/credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Sheets API.
    authorize(JSON.parse(content), getTable)
  });

  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
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
  function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error while trying to retrieve access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }

  /**
   * Prints the names and majors of students in a sample spreadsheet:
   * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
   */

  const sheetVal = (sheets, id, range, readyTable, funcName) => {
    const name = funcName.name
    sheets.spreadsheets.values.get({
      spreadsheetId: id,
      range: range,
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;
      if (rows.length) {
        _.map(rows, (item) => {
          const resObj = {}
          _.map(item, (item, index) => {
            funcName(item, index, resObj)
          })
          readyTable[name].push(resObj)
        })
        fs.writeFileSync("server/output.json", JSON.stringify(readyTable), 'utf-8')
      } else {
        console.log('No data found.');
      }
    })
  }
  const info_task = (item, index, resObj) => {
    if (index == 0) { resObj.task = item }
    else if (index == 1) { resObj.link = item }
    else if (index == 2) { resObj.status = item }
  }
  const pairs = (item, index, resObj) => {
    if (index == 0) { resObj.interviewer = item }
    else if (index == 1) { resObj.student = item }
  }
  const mentor_info = (item, index, resObj) => {
    if (index == 0) { resObj.Name = item }
    else if (index == 1) { resObj.Surname = item }
    else if (index == 4) { resObj.GitHub = item }
  }
  const ready_tasks = (item, index, resObj) => {
    if (index == 0) { resObj.student_github = item }
    else if (index == 1) { resObj.task = item }
  }
  function getTable(auth) {
    const sheets = google.sheets({ version: 'v4', auth });
    sheetVal(sheets, '1uojrkWfoLh9oTKxLWCdirrNJYGVfCtiF9RlZrwsxSbo', 'A2:C10', readyTable, info_task)
    sheetVal(sheets, '1-HYzpnEYpIsv5qSSuSZCgKf5-mYnG0T3Xt864Hhdnew', 'pairs!A2:B1048576', readyTable, pairs)
    sheetVal(sheets, '1-HYzpnEYpIsv5qSSuSZCgKf5-mYnG0T3Xt864Hhdnew', 'second_name-to_github_account!A2:E1048576', readyTable, mentor_info)
    sheetVal(sheets, '18exMEOWGKsMPggt0t3yU-MR1gvX3OFBDqKCvdNy8rAU', 'C2:D1048576', readyTable, ready_tasks)
  }
}