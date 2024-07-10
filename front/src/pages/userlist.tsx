import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { GET_USERS } from '../graphql/queries';

const Userlist: React.FC = () => {
    const navigate = useNavigate();

    // Utilisateurs fictifs pour le test
    const [users, setUsers] = useState([
        { id: 1, username: 'Utilisateur1' },
        { id: 2, username: 'Utilisateur2' },
        { id: 3, username: 'Utilisateur3' },
        { id: 4, username: 'Utilisateur4' },
        { id: 5, username: 'Utilisateur5' },
        { id: 6, username: 'Utilisateur6' },
        { id: 7, username: 'Utilisateur7' },
        { id: 8, username: 'Utilisateur8' },
        { id: 9, username: 'Utilisateur9' },
        { id: 10, username: 'Utilisateur10' },
        { id: 11, username: 'Utilisateur11' }
    ]);

    // Simulez le chargement des données
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simule un délai de chargement

        return () => clearTimeout(timer);
    }, []);

    // Fonction pour gérer le clic sur un utilisateur
    const handleUserClick = (id: number) => {
        navigate(`/conversation/${id}`);
    };

    // Affichage conditionnel basé sur l'état de chargement
    if (loading) {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold">Listes des utilisateurs</h1>
                <p className="mt-2 text-gray-200">Cette page liste tous les utilisateurs créés, il suffit de cliquer sur la personne pour créer une conversation.</p>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Listes des utilisateurs</h1>
            <p className="mt-2 text-gray-200">Cette page liste tous les utilisateurs créés, il suffit de cliquer sur la personne pour créer une conversation.</p>
            <div className='grid grid-cols-4 gap-4 mt-3'>
                {users.map(user => (
                    <div className="card flex shadow md:scale-95 md:hover:scale-100 hover:border-double ease-out transition-all duration-300 cursor-pointer hover:bg-[#5865f2]" key={user.id} onClick={() => handleUserClick(user.id)}>
                        <i className="material-icons me-2">person</i>
                        <p>{user.username}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ---- Version prod

// const Userlist: React.FC = () => {
//     const { loading, error, data } = useQuery(GET_USERS);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :( {error.message}</p>;

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold">Bienvenue sur notre page d'accueil!</h1>
//             <p className="mt-2 text-gray-600">Ceci est une mini page d'accueil.</p>
//             <ul>
//                 {data.getUsers.map((user: { id: number, username: string }) => (
//                     <li key={user.id}>{user.username}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

export default Userlist;
