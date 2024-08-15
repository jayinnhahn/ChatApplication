// import { useEffect, useState } from 'react';
// import SockJS from 'sockjs-client';
// import Stomp from 'stompjs';

// const Chat = () => {
//     const [messages, setMessages] = useState([]);
//     let stompClient = null;

//     useEffect(() => {
//         const socket = new SockJS('http://localhost:8080/ws');
//         stompClient = Stomp.over(socket);
//         stompClient.connect({}, (frame) => {
//             console.log('Connected: ' + frame);
//             stompClient.subscribe('/topic/messages', (message) => {
//                 showMessage(JSON.parse(message.body));
//             });
//         });

//         return () => {
//             if (stompClient !== null) {
//                 stompClient.disconnect();
//             }
//         };
//     }, []);

//     const showMessage = (message) => {
//         setMessages((prevMessages) => [...prevMessages, message]);
//     };

//     const sendMessage = (messageContent) => {
//         stompClient.send('/app/chat', {}, JSON.stringify({content: messageContent}));
//     };

//     return (
//         <div>
//             <ul>
//                 {messages.map((msg, index) => (
//                     <li key={index}>{msg.content}</li>
//                 ))}
//             </ul>
//             <input
//                 type="text"
//                 onKeyPress={(e) => {
//                     if (e.key === 'Enter') {
//                         sendMessage(e.target.value);
//                         e.target.value = '';
//                     }
//                 }}
//             />
//         </div>
//     );
// };

// export default Chat;
