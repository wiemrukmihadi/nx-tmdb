import { StarBorder } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
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
    <Grid key={props.key} item xs={4} md={2.4} lg={2}>
      <Card sx={{ maxWidth: '300px' }}>
        <CardActionArea>
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
          <CardMedia
            image={`https://www.themoviedb.org/t/p/w300_and_h450_face${props.item.backdrop_path}`}
            height={300}
            alt={props.item.title}
            component="img"
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
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default MovieItem;
