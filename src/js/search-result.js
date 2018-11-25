import{query} from './search-form.js'; 
export function search_res (res_data,callback){
    const api_key = 'AIzaSyDVdE4LwpceNaEd3UTHg4ESHrBjnWwne_E'  
    const request = gapi.client.youtube.search.list({
    q: query.value,
    part: 'snippet',
    order: 'viewCount',
    type: 'video',
    maxResults: 15
    });
    request.execute((response) => {
        const results = response.result;
        results.items.forEach((item, i) => { 
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id.videoId}&key=${api_key}`, true);
            xhr.send();
            xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) {return}
            else{   
        res_data[i+1] = {          
            link:`https://www.youtube.com/watch?v=${item.id.videoId}`,
            title:item.snippet.title,
            thumb:item.snippet.thumbnails.medium.url,
            descr:item.snippet.description,
            author:item.snippet.channelTitle,
            view:JSON.parse(xhr.response).items[0].statistics.viewCount,
            date:item.snippet.publishedAt.match(/\d+-\d+-\d+/).join()
            }}                                       
            }           
        });              
    }); 
return res_data
}