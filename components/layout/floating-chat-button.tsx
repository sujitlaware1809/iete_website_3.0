'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChatDialog } from "./chat-dialog";

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 p-2 bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out z-50 border border-blue-300/30"
        aria-label="Open Chat"
      >
        <img
          src="/chatbot.png"
          alt="Chat"
          className="w-10 h-10 object-contain"
        />
      </Button>

      <ChatDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}