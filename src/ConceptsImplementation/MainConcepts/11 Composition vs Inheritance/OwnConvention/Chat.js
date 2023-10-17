import React, { Component } from 'react';

function Message({ text }) {
  return <div>{text}</div>;
}

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        'hii',
        'How are you?',
        'Where are you?',
        'What are you doing?',
   
 

     
      ],
      currentMessageIndex: 0,
      messageElements: [],
      maxLoops: 1,
      currentLoop: 0,
    };
  }

  componentDidMount() {
    this.messageInterval = setInterval(this.printNextMessage, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.messageInterval);
  }

  printNextMessage = () => {
    const { messages, currentMessageIndex, maxLoops, currentLoop } = this.state;
    const nextMessageIndex = (currentMessageIndex + 1) % messages.length;

    const currentMessage = messages[currentMessageIndex];
    const newMessageElement = <Message key={currentMessageIndex} text={currentMessage} />;

    this.setState((prevState) => ({
      currentMessageIndex: nextMessageIndex,
      messageElements: [...prevState.messageElements, newMessageElement],
    }));

    if (nextMessageIndex === 0) {
      this.setState({ currentLoop: currentLoop + 1 });
    }

    if (currentLoop >= maxLoops) {
      clearInterval(this.messageInterval);
    }
  };

  render() {
    const { messageElements } = this.state;

    return (
      <div className='Chat'>
        <div><h2>Chat</h2></div>
        {messageElements.map((element) => element)}
      </div>
    );
  }
}

export default Chat;
