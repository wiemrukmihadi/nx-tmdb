import React, { useState } from 'react';
import { Avatar, Box, Card, Container, ImageList, ImageListItem, ImageListItemBar, Rating, Tooltip, useMediaQuery } from '@mui/material';
import styles from './index.module.css';
import {
  useQuery,
} from '@tanstack/react-query'
import Image from 'next/image';
import { StarBorder } from '@mui/icons-material';
import { Movie, Movies } from 'Interfaces';
import useQueryMovie from 'hooks/use-query-movie/use-query-movie';
import MovieItem from 'components/movie-item/movie-item';

/* eslint-disable-next-line */
export interface MainProps {
  movies: Movie[],
  loading: boolean,
}
export function Main(props: MainProps) {
  
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const cols = isSmallScreen ? 1 : 5;
  const columnWidth = isSmallScreen ? '50%' : '25%';
  const [listData, setListData] = React.useState<Movie[]>([]);


  const { isLoading, data } = useQueryMovie();
  React.useEffect(() => {
    if(props.movies){
      setListData(props.movies);
    }

  }, [props.movies]);

  React.useEffect(() => {
    if(data?.results){
      setListData(data?.results);
    }

  }, [data?.results]);
  if (isLoading || props.loading) return <Box sx={{ justifyContent: 'center', alignItems: 'center'}}>Loading</Box>;
  return (
    <Box sx={{ m: '12px'}}>
    <ImageList 
      cols={cols}
      rowHeight={160}
      sx={{
        mb: 8,
        gridTemplateColumns:'repeat(auto-fill, minmax(100px, 1fr)!important)'
      }} 
      gap={12}
    >
        {listData?.map((item: Movie) => (
          <MovieItem item={item}/>
        ))}
    </ImageList>
    </Box>
  );
}

export default Main;
