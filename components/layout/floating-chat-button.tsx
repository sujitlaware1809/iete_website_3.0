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
        className="fixed bottom-10 right-10 rounded-full w-16 h-16 p-2 bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out z-50"
        aria-label="Open Chat"
      >
        <img
          src="/chatbot.png"
          alt="Chat"
          className="w-12 h-12 object-contain"
        />
      </Button>

      <ChatDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
