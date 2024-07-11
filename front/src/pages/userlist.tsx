import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries';

const Userlist: React.FC = () => {
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_USERS);

    const handleUserClick = (id: number) => {
        navigate(`/conversation/${id}`);
    };

    if (loading) {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold">Listes des utilisateurs</h1>
                <p className="mt-2 text-gray-200">Cette page liste tous les utilisateurs créés, il suffit de cliquer sur la personne pour créer une conversation.</p>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) return <p>Error :( {error.message}</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Listes des utilisateurs</h1>
            <p className="mt-2 text-gray-200">Cette page liste tous les utilisateurs créés, il suffit de cliquer sur la personne pour créer une conversation.</p>
            <div className='grid grid-cols-4 gap-4 mt-3'>
                {data.getUsers.map((user: { id: number, username: string }) => (
                    <div className="card flex shadow md:scale-95 md:hover:scale-100 hover:border-double ease-out transition-all duration-300 cursor-pointer hover:bg-[#5865f2]" key={user.id} onClick={() => handleUserClick(user.id)}>
                        <i className="material-icons me-2">person</i>
                        <p>{user.username}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Userlist;