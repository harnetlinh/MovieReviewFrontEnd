import { getFilmID, getFilmInfo } from '../apis/omdbapi';

export async function getOneInfo(movie_id = 0, year, name){
    
    if(movie_id === 0){
        const searchResult = await getFilmID(name, year);
        if(parseInt(searchResult.data.totalResults) >= 1)
        {
            const result = await getFilmInfo(searchResult.data.Search[0]['imdbID']);
            return result;
        }else{
            return null;
        }
    }else{
        const result = await getFilmInfo(movie_id);
        return result;
    }
    
}