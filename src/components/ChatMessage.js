import React from "react";
import "./ChatMessage.css";

const ChatMessage = (props) => {
    if(props.messageType === "sent"){
        return <SentMessage message = {props.message}/>
    } else {
        return <ReceivedMessage message = {props.message}/>
    }
};

const SentMessage = (props) => {
    return (
        <div className="sent-message-div">
            <span className="sent-message">{props.message.body}</span>
        </div>
    );
}

const ReceivedMessage = (props) => {
        return (
            <div className="chat-message">
                <p className="user-name">{props.message.user.username} </p>
                <div className="message-pic">
                    <img className="pic" src={props.message.user.avatar} alt />
                <span className="message">{props.message.body}</span>
                </div>
            </div>
        );
}

export default ChatMessage;
