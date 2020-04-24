require('./ChatApp.css');
import React from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import ChatInput from './ChatInput';
import { Card, Container, Row, Col, Toast } from 'react-bootstrap'
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
      <div className="container" >
        <br/>
        <Row className="row">
          <Col xs={7}>
        <h1 >Need any assistance with your order?</h1>
        <h4> Use the chat on your right and we'll get back at you as soon as possible</h4>
        </Col>
        <Col>
        <Card className="chat">
        <h3>Chat with support</h3>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
        </Card>
        </Col>
        </Row>
       
      </div>
    );
  }

}
ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
