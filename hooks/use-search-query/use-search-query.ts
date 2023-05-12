import { useState, useCallback } from 'react';
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { ResponseMovies } from 'Interfaces';

// const searchMovies = async (query: string): Promise<ResponseMovies> => {
//   const { data } = await axios.get<ResponseMovies>(
//     `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`
//   );
//   return data;
// };

const searchMovies = async (query: string) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=796b78a940cdb3ba4ac81d7d423b34a6&query=${query}`);
  const data = await response.json();
  return data;
};

export const useSearchQuery = (query: string) => {
  return useQuery(["search", query], () => searchMovies(query), {
    refetchOnWindowFocus: false,
    enabled: false // disable this query from automatically running
  });
};

export default useSearchQuery;
