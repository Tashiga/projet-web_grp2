// Conversation.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CONVERSATION_MESSAGES } from '../graphql/queries';
import { SEND_MESSAGE } from '../graphql/mutations';
import { useAuth } from '../utils/AuthContext';

interface Message {
    id: number;
    userFrom: { id: number; username: string };
    content: string;
    timestamp: string;
}

const Conversation: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { user } = useAuth();
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const { data, loading, error, refetch } = useQuery(GET_CONVERSATION_MESSAGES, {
        variables: { conversationId: parseInt(id!) },
    });

    const [sendMessage] = useMutation(SEND_MESSAGE);

    useEffect(() => {
        if (data) {
            setMessages(data.getConversationMessages);
        }
    }, [data]);

    const handleSendMessage = async () => {
        if (newMessage.trim() === '' || !user) return;

        try {
            await sendMessage({
                variables: {
                    conversationId: parseInt(id!),
                    userFromId: user.id,
                    userToId: parseInt(id!),
                    message: newMessage,
                },
            });
            setNewMessage('');
            refetch();
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="p-3 h-full flex flex-col">
            <div className='conv-mess'>
                <h1 className="text-2xl font-bold">Conversation avec l'utilisateur {id}</h1>
                <p>Conversation :</p>
                <div className="h-full overflow-y-scroll">
                    {messages.map(message => (
                        <div key={message.id} className="message mb-2 p-2 rounded-md">
                            <p className="text-sm">{message.userFrom.username} - <span className="text-xs">{new Date(message.timestamp).toLocaleTimeString()}</span></p>
                            <p>{message.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex bg-[#1e1f22] p-2 w-full rounded-xl conv-panel mt-2 max-h-12'>
                <input className='bg-[#313338] w-[95%] rounded-lg p-2 text-white' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Type your message..." />
                <i className='material-icons my-auto mx-auto text-white'>mood</i>
            </div>
        </div>
    );
};

export default Conversation;