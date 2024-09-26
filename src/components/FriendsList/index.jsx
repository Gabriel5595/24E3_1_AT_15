import React from 'react';
import FriendItem from '../FriendsItem';
import { List, Typography } from '@mui/material';

export default function FriendsList() {
    const friends = [
        { id: 1, photo: 'https://via.placeholder.com/40', name: 'Amigo 1', mutualFriends: 5 },
        { id: 2, photo: 'https://via.placeholder.com/40', name: 'Amigo 2', mutualFriends: 10 },
        { id: 3, photo: 'https://via.placeholder.com/40', name: 'Amigo 3', mutualFriends: 15 },
    ];

    return (
        <div>
            <Typography variant="h6">Amigos</Typography>
            <List>
                {friends.map((friend) => (
                    <FriendItem key={friend.id} data={friend} />
                ))}
            </List>
        </div>
    );
}
