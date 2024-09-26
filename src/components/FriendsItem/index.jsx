import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

export default function FriendItem({ data }) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={data.photo} />
            </ListItemAvatar>
            <ListItemText
                primary={data.name}
                secondary={`${data.mutualFriends} amigos em comum`}
            />
        </ListItem>
    );
}
