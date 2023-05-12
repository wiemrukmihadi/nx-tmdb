import { Box, ImageList, useMediaQuery } from '@mui/material';
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
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:1200px)');

  const cols = () => {
    if (isSmallScreen) {
      return 1;
    }
    if (isMediumScreen) {
      return 3;
    }
    return 5;
  };
  // const cols = isMediumScreen ? 2 : 5;
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
    <Box sx={{ m: '12px' }}>
      <ImageList
        cols={cols()}
        // rowHeight={160}
        sx={{
          mb: 8,
          gridTemplateColumns:
            'repeat(auto-fill, minmax(100px, 1fr)!important)',
        }}
        gap={12}
      >
        {listData?.map((item: Movie) => (
          <MovieItem key={item.id} item={item} />
        ))}
      </ImageList>
    </Box>
  );
}

export default Main;
