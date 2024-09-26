import React from 'react';
import Post from '../Post';

export default function Feed() {
    const posts = [
        {
            id: 1,
            image: 'https://via.placeholder.com/500',
            title: 'Título da Postagem',
            text: 'Conteúdo da postagem...',
            date: '2023-10-01',
            author: {
                name: 'Amigo 1',
                avatar: 'https://via.placeholder.com/40',
            },
            likes: 10,
            shares: 2,
            comments: [
                { user: 'Comentador 1', text: 'Comentário 1' },
                { user: 'Comentador 2', text: 'Comentário 2' },
            ],
        },
    ];

    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} data={post} />
            ))}
        </div>
    );
}
