export interface Message {
    id: string;
    message: string;
    sentAt: string;
    user: "AI" | "USER";
}