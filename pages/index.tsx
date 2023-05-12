import * as React from 'react';
import Box from '@mui/material/Box';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Main from './main';
import { Movie, ResponseMovies } from 'Interfaces';
import CustomAppBar from 'components/custom-app-bar/custom-app-bar';

const queryClient = new QueryClient();

export default function Index() {
  const [movieList, setMovieList] = React.useState<Movie[]>([]);
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState<boolean>(false);


  return (
    <QueryClientProvider client={queryClient}>
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar onSearchResult={(response) => {
        console.log(response);
        setMovieList(response?.results);
      }}/>
      <Main loading={loading} movies={movieList}/>
    </Box>
    </QueryClientProvider>
  );
}
