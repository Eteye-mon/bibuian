import { ChatMessage, ChatMessageContent } from "@/components/ui/chat-message";

const messages = [
  {
    id: "1",
    content:
      "My transaction failed but the funds were deducted from my account",
    type: "user",
  },
  {
    id: "2",
    content:
      "I understand your concern. Let me check the transaction details. Could you please provide your account email?",
    type: "assistant",
  },
  {
    id: "3",
    content: "My email is user@example.com",
    type: "user",
  },
];

export function ChatMessagePane() {
  return (
    <div className="w-full space-y-4">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          id={message.id}
          type={message.type === "user" ? "outgoing" : "incoming"}
          variant="bubble"
        >
          <ChatMessageContent content={message.content} />
        </ChatMessage>
      ))}
    </div>
  );
}
