import React from "react";
import { Message } from "../model/Message";
import Chat from "../component/chat/ChatComponent";

interface ChattingRoomProps {
    messages: Message[];
}

// This view will be used for showing chatting room
// It gonna be multiple Chat component
const ChattingRoom = ({ messages }: ChattingRoomProps) => {
    return <div>
        {messages.map((message) => {
            return <Chat id={message.id} message={message.message} sentAt={message.sentAt} user={message.user} />
        })}
    </div>
}

export default ChattingRoom;