import { useQuery } from '@tanstack/react-query';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const searchMovies = async (query: string) => {
  const response = await fetch(
    `${apiUrl}search/movie?api_key=${apiKey}&query=${query}`
  );
  const data = await response.json();
  return data;
};

export const useSearchQuery = (query: string) => {
  return useQuery(['search', query], () => searchMovies(query), {
    refetchOnWindowFocus: false,
    enabled: false, // disable this query from automatically running
  });
};

export default useSearchQuery;
