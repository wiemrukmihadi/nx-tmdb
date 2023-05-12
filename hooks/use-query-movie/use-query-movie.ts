import { useQuery } from '@tanstack/react-query';
import { ResponseMovies } from 'Interfaces';
import axios from 'axios';
import { useState, useCallback } from 'react';


// const queryhMovies = async (): Promise<ResponseMovies> => {
//   const { data } = await axios.get<ResponseMovies>(
//     `https://api.themoviedb.org/3/movie/popular?api_key=796b78a940cdb3ba4ac81d7d423b34a6`
//   );
//   console.log('dataku', data);
//   return data;
// };

const queryhMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=796b78a940cdb3ba4ac81d7d423b34a6`);
  const data = await response.json();
  return data;
};


const useQueryMovie = () => {
  return useQuery([], () => queryhMovies());
};


export default useQueryMovie;
