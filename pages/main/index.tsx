import { Box, Grid } from '@mui/material';
import { Movie } from 'Interfaces';
import MovieItem from 'components/movie-item/movie-item';
import useQueryMovie from 'hooks/use-query-movie/use-query-movie';
import React from 'react';

/* eslint-disable-next-line */
export interface MainProps {
  movies: Movie[];
  loading: boolean;
}
export function Main(props: MainProps) {
  const [listData, setListData] = React.useState<Movie[]>([]);

  const { isLoading, data } = useQueryMovie();
  React.useEffect(() => {
    if (props.movies) {
      setListData(props.movies);
    }
  }, [props.movies]);

  React.useEffect(() => {
    if (data?.results) {
      setListData(data?.results);
    }
  }, [data?.results]);
  if (isLoading || props.loading)
    return (
      <Box sx={{ justifyContent: 'center', alignItems: 'center' }}>Loading</Box>
    );
  return (
    <Box sx={{ m: '10px' }}>
      <Grid container spacing={2}>
        {listData?.map((item: Movie) => (
          <MovieItem key={item.id} item={item} />
        ))}
      </Grid>
    </Box>
  );
}

export default Main;
