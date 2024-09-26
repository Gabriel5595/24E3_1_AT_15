import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default function Menu() {
    const menuItems = ['Início', 'Perfil', 'Mensagens', 'Configurações'];

    return (
        <List>
            {menuItems.map((text, index) => (
                <ListItem button key={index}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    );
}
