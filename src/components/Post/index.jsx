import React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    Avatar,
    CardActions,
    IconButton,
} from '@mui/material';
import { Favorite, Share, Comment } from '@mui/icons-material';

export default function Post({ data }) {
    return (
        <Card sx={{ marginBottom: 2 }}>
            <CardHeader
                avatar={<Avatar src={data.author.avatar} />}
                title={data.author.name}
                subheader={data.date}
            />
            <CardMedia component="img" image={data.image} alt={data.title} />
            <CardContent>
                <Typography variant="h6">{data.title}</Typography>
                <Typography variant="body2">{data.text}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Curtir">
                    <Favorite />
                </IconButton>
                <Typography>{data.likes}</Typography>
                <IconButton aria-label="Compartilhar">
                    <Share />
                </IconButton>
                <Typography>{data.shares}</Typography>
                <IconButton aria-label="Comentários">
                    <Comment />
                </IconButton>
                <Typography>{data.comments.length}</Typography>
            </CardActions>
        </Card>
    );
}