import axios from 'axios';
import { getFilmInfo } from '../apis/omdbapi'

const optionsPopularMovie = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre',
    params: {genre: '/chart/popular/genre/adventure'},
    headers: {
      'x-rapidapi-key': '901200ee6emsh54a0543ff6caa1ap12e781jsna59d18e06f5b',
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  };

async function getAllID(){
    console.log("getAllID");
    const response = await axios.request(optionsPopularMovie);
    const result = await getArrayID(response.data);
    return result;
}
function getArrayID(rawArray){
    let result = [];
    rawArray.forEach(e => {
        result.push(e.split("/")[2]);
    });
    return result;
}

export async function getAllFilmInfo(current, number){
    const arrayID = await getAllID();
    let requestURL = [];
    for (let index = current+1; index <= (current + number); index++) {
        requestURL.push( getFilmInfo(arrayID[index]) );
    }
    axios.all(requestURL).then(
        axios.spread((...responses) => {
            console.log(responses);
        })
    ).catch(err=>{

    })
}