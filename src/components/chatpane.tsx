import { ChatMessage, ChatMessageContent } from "@/components/ui/chat-message";

const messages = [
  {
    id: "1",
    content:
      "My transaction failed but the funds were deducted from my account",
    type: "customer",
    date: "May 12, 10:45 AM (3h ago)",
  },
  {
    id: "2",
    content:
      "I understand your concern. Let me check the transaction details. Could you please provide your account email?",
    type: "Support Agent",
    date: "May 12, 10:45 AM (2h ago)",
  },
  {
    id: "3",
    content: "My email is user@example.com",
    type: "customer",
    date: "May 12, 10:45 AM (1h 53m ago)",
  },
];

export function ChatMessagePane() {
  return (
    <div className="w-full space-y-10">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          id={message.id}
          type={message.type === "customer" ? "outgoing" : "incoming"}
          variant="bubble"
        >
          <ChatMessageContent content={<>
            <span className="font-bold">{message.type}</span>
            <p>{message.content}</p>
            <span className="text-end font-normal">{message.date}</span>
          </>} />
        </ChatMessage>
      ))}
    </div>
  );
}
