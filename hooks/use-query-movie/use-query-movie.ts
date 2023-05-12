import { useQuery } from '@tanstack/react-query';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const queryhMovies = async () => {
  const response = await fetch(`${apiUrl}movie/popular?api_key=${apiKey}`);
  const data = await response.json();
  return data;
};

const useQueryMovie = () => {
  return useQuery([], () => queryhMovies());
};

export default useQueryMovie;
