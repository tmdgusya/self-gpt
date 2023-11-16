import React from "react";
import { Message } from "../../model/Message";

// This component will be used for Chatting
const Chat = ({id, message, sentAt, user}: Message) => {
    // The background color of the chat will be selected by who sent this message
    // if the sender is AI, the background color will be rgba(49, 221, 232, 1)
    // if the sender is user, the background color will be white
    // Also, the left margin of the chat will be selected by who sent this message
    // if the sender is AI, the left margin will be 0px
    // if the sender is user, the left margin will be 20px
    // Create React component by following the above instructions using tailwindcss
    return (
        <div id={id} className="flex flex-col">
            <div className="flex flex-row">
                <div className = {user === "AI" ? "bg-blue-400 rounded-lg p-2" : "bg-white rounded-lg p-2"} style={{marginLeft: user === "AI" ? "0px" : "20px"}}>
                    <p>{message}</p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row">
                    <p>{sentAt}</p>
                </div>
            </div>
        </div>
    )
}

export default Chat;