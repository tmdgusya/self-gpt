import { Message } from "../model/Message";


// create mock datas for testing chatting component
// The data format will be like 
/*
{
    id: "1",
    message: "Hello",
    sentAt: "2023-11-16 17:11:00",
    user: "USER"
}
*/ 
export const mockChattingMessagesForTest: Message[] = [{
    id: "1",
    message: "Hello",
    sentAt: "2023-11-16 17:11:00",
    user: "USER"
},
{
    id: "2",
    message: "Hello, User! I'm AI Assistant for you",
    sentAt: "2023-11-16 17:11:00",
    user: "AI"
}]