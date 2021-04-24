import { getFilmID, getFilmInfo } from '../apis/omdbapi';

export async function getOneInfo(year, name){
    const searchResult = await getFilmID(name, year);
    if(parseInt(searchResult.data.totalResults) >= 1)
    {
        const result = await getFilmInfo(searchResult.data.Search[0]['imdbID']);
        return result;
    }else{
        return null;
    }
}