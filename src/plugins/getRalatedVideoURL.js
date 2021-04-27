
import { template } from './templateURL.js';
const tubitvSearchURL = template`https://tubitv.com/oz/search/${'search_query'}?isKidsMode=false`
const tubitvMoviehURL = template`https://tubitv.com/oz/movie/${'id'}`
import axios from 'axios';



async function getList(search_query){
    const url =tubitvSearchURL({search_query:search_query})
    const result = await axios(url, {
        method: 'GET',
        mode: 'no-cors',
        withCredentials: true,
        crossdomain: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            },
        credentials: 'same-origin',
        })
    return result;
}

function addLink2Film(rawList){
    let result = rawList.map(function(el){
        var o = Object.assign({}, el);
        o.link = tubitvMoviehURL(el.id);
        return o;
    })
    return result;
}

export async function getListURL({name, gender}){
    const listRawMovie_1 = await getList(name);

    const listRawMovie_2 = await getList(gender);

    const listMovie_1 = addLink2Film(listRawMovie_1);
    const listMovie_2 =  addLink2Film(listRawMovie_2);
    let listURL = [] ;
    listURL.push(listMovie_1);
    listURL.push(listMovie_2);

    return listURL;
}

