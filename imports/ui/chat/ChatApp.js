require('./ChatApp.css');
import React from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import ChatInput from './ChatInput';

class ChatApp extends React.Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [{username: "Support",message: "What can we help you with?"}]  };
    this.sendHandler = this.sendHandler.bind(this);
    
  
    
    this.socket = io('http://localhost:3000', { query: `username=${Meteor.user().username}` }).connect();

    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      username: Meteor.user().username,
      message
    };

    this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="Container">
        <h3>Chat with support</h3>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }

}
ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
