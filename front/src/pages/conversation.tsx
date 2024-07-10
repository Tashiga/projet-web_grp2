import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

interface Message {
    id: number;
    userFrom: string;
    content: string;
    timestamp: Date;
}

const Conversation: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const message: Message = {
            id: messages.length + 1,
            userFrom: 'You', // Or the current user's name/ID
            content: newMessage,
            timestamp: new Date(),
        };

        setMessages([...messages, message]);
        setNewMessage('');
    };

    return (
        <div className="p-3 h-full flex flex-col">
            <div className='conv-mess'>
                <h1 className="text-2xl font-bold">Conversation avec l'utilisateur {id}</h1>
                <p>Conversation :</p>
                <div className="h-full overflow-y-scroll">
                    {messages.map(message => (
                        <div key={message.id} className="message mb-2 p-2 rounded-md">
                            <p className="text-sm">{message.userFrom} - <span className="text-xs">{message.timestamp.toLocaleTimeString()}</span></p>
                            <p>{message.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex bg-[#1e1f22] p-2 w-full rounded-xl conv-panel mt-2 max-h-12'>
            <input className='bg-[#313338] w-[95%] rounded-lg p-2 text-white' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Type your message..."/>
                <i className='material-icons my-auto mx-auto text-white'>mood</i>
            </div>
        </div>
    );
};

export default Conversation;
