import { StarBorder } from '@mui/icons-material';
import {
  Avatar,
  Card,
  ImageListItem,
  ImageListItemBar,
  Rating,
  Tooltip,
} from '@mui/material';
import { Movie } from 'Interfaces';

/* eslint-disable-next-line */
export interface MovieItemProps {
  item: Movie;
  key: number;
}

export function MovieItem(props: MovieItemProps) {
  return (
    <Card key={props.key}>
      <ImageListItem sx={{ height: '100% !important' }}>
        <ImageListItemBar
          sx={{
            background:
              'linear-gradient: (to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0,0)100%)',
          }}
          title={props.item.title}
          position="top"
          actionIcon={
            <Tooltip title={props.item.title} sx={{ mr: '5px' }}>
              <Avatar
                src={`https://www.themoviedb.org/t/p/w300_and_h450_face${props.item.backdrop_path}`}
              ></Avatar>
            </Tooltip>
          }
        ></ImageListItemBar>
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_face${props.item.backdrop_path}`}
          srcSet={`https://www.themoviedb.org/t/p/w300_and_h450_face${props.item.backdrop_path}`}
          alt={props.item.title}
          loading="lazy"
        />
        <ImageListItemBar
          sx={{
            background:
              'linear-gradient: (to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0,0)100%)',
          }}
          title={props.item.overview}
          position="bottom"
          actionIcon={
            <Rating
              sx={{ color: 'rgba(255,255,255,0.8)', mr: '5px' }}
              name="movie-raging"
              defaultValue={props.item.vote_average}
              precision={0.5}
              emptyIcon={
                <StarBorder
                  sx={{ color: 'rgba(255,255,255,0.8)', mr: '5px' }}
                />
              }
            />
          }
        ></ImageListItemBar>
      </ImageListItem>
    </Card>
  );
}

export default MovieItem;
