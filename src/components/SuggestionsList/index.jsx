import React from 'react';
import SuggestionItem from '../SuggestionItem';
import { List, Typography } from '@mui/material';

export default function SuggestionsList() {
    const suggestions = [
        {
            id: 1,
            photo: 'https://via.placeholder.com/40',
            name: 'Sugestão 1',
            mutualFriend: 'Amigo em Comum',
        },
        {
            id: 2,
            photo: 'https://via.placeholder.com/40',
            name: 'Sugestão 2',
            mutualFriend: 'Amigo em Comum',
        },{
            id: 3,
            photo: 'https://via.placeholder.com/40',
            name: 'Sugestão 3',
            mutualFriend: 'Amigo em Comum',
        },
    ];

    return (
        <div>
            <Typography variant="h6">Sugestões de Amizade</Typography>
            <List>
                {suggestions.map((suggestion) => (
                    <SuggestionItem key={suggestion.id} data={suggestion} />
                ))}
            </List>
        </div>
    );
}