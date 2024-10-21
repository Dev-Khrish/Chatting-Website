import React, { useState, useEffect } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { collection, addDoc, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';

const ChatSection = () => {
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'), limit(50));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(fetchedMessages);
    });
    return () => unsubscribe;
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      createdAt: new Date(),
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL
    });

    setNewMessage('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-[calc(100vh-200px)]">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MessageSquare className="mr-2 h-6 w-6 text-indigo-600" />
        Chat
      </h2>
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start ${msg.uid === user?.uid ? 'justify-end' : ''}`}>
            <img src={msg.photoURL || 'https://via.placeholder.com/40'} alt="User avatar" className="w-10 h-10 rounded-full mr-3" />
            <div className={`p-3 rounded-lg ${msg.uid === user?.uid ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <p className="font-medium">{msg.displayName}</p>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button type="submit" className="bg-indigo-600 text-white p-2 rounded-r-lg">
          <Send className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};

export default ChatSection;