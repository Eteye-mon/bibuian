"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  ImageIcon,
  FileUp,
  Figma,
  MonitorIcon,
  CircleUserRound,
  ArrowUpIcon,
  Paperclip,
  PlusIcon,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomMessageUi() {
  const [value, setValue] = useState("");
  

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        setValue("");
      }
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center space-y-4 p-4  sm:space-y-8">
      <div className="w-full flex">
        <div className=" w-full">
          <div className="overflow-y-hidden border-border bg-secondary/20 relative rounded-xl border">
            <Textarea
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              className={cn(
                "w-full px-4 py-3",
                "resize-none",
                "bg-transparent",
                "border-none",
                "text-sm",
                "focus:outline-none",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "placeholder:text-sm",
                "min-h-[90px]"
              )}
              style={{
                overflow: "hidden",
              }}
            />
          </div>
          <p className="text-muted-foreground text-sm">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
        <div className="space-y-2 p-3">
          <div className="flex items-center gap-2">
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="group hover:bg-secondary/50 flex items-center gap-1 rounded-lg p-2"
            >
              <Paperclip className="h-4 w-4" />
              <span className="hidden text-xs transition-opacity group-hover:inline">
                Attach
              </span>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={cn(
                "border-border flex items-center justify-between gap-1 rounded-lg border px-1.5 py-1.5 text-sm transition-colors",
                value.trim() ? "bg-[#F6B10A] text-white" : "text-zinc-400"
              )}
            >
              <Send
                className={cn(
                  "h-4 w-4",
                  value.trim() ? "text-white" : "text-zinc-400"
                )}
              />
              <span className="sr-only">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <Button
      type="button"
      variant="secondary"
      className="border-border bg-secondary/20 flex w-full flex-shrink-0 items-center gap-2 rounded-full border px-3 py-2 whitespace-nowrap transition-colors sm:w-auto sm:px-4"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Button>
  );
}

export default CustomMessageUi;
