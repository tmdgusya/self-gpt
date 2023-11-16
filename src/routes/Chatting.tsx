import React from "react";
import { Message } from "../model/Message";
import Chat from "../component/chat/ChatComponent";

interface ChattingRoomProps {
    messages: Message[];
}

// This view will be used for showing chatting room
// It gonna be multiple Chat component
const ChattingRoom = ({ messages }: ChattingRoomProps) => {
    return <div className="flex flex-col">
        {messages.map((message) => {
            return <Chat id={message.id} message={message.message} sentAt={message.sentAt} user={message.user} />
        })}
        <div id="chat-box" className="flex">
            <div id="chat-input">
                <input></input>
            </div>
            <div id="send-button">
                <button>Send</button>
            </div>
        </div>
    </div>
}

export default ChattingRoom;