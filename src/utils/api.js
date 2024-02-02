import axios from "axios";

 const BASE_url= "https://youtube138.p.rapidapi.com"

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key':'024a7dcccfmsha3301e344973bbap13c8fdjsnc039337a0d45' ,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
 export const fetchDataFromApi = async (url) =>{
    const {data} = await axios.get(`${BASE_url}/${url}`, options)
    return data; 
  }
  