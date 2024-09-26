import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

export default function SuggestionItem({ data }) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={data.photo} />
            </ListItemAvatar>
            <ListItemText
                primary={data.name}
                secondary={`Amigo em comum: ${data.mutualFriend}`}
            />
        </ListItem>
    );
}
