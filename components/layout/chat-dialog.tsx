'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Send, User, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ChatDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [messages, setMessages] = useState<Array<{ id: string; text: string; sender: 'user' | 'bot'; timestamp: Date }>>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle clicks outside the chat dialog
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onOpenChange]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text,
      sender: 'user' as const,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message. I\'ll help you with that.',
        sender: 'bot' as const,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-28 right-6 w-[420px] z-50" ref={cardRef}>
      <Card className="h-[550px] flex flex-col shadow-2xl bg-slate-900 border-2 border-blue-500/30">
        <CardHeader className="border-b border-blue-400/20 flex flex-row justify-between items-center p-4 bg-gradient-to-r from-slate-800 to-slate-900">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-full border border-blue-400/30">
              <img src="/mascot.svg" alt="IETE Assistant" className="w-8 h-8" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-white">IETE Assistant</CardTitle>
              <Badge className="h-5 text-xs mt-1 bg-green-500/20 text-green-300 border-green-400/30">
                Online
              </Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full h-8 w-8 p-0 text-white/70 hover:bg-red-500/20 hover:text-red-300 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenChange(false);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0 bg-slate-900" onClick={(e) => e.stopPropagation()}>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-900 to-slate-800 custom-scrollbar"
               style={{
                 scrollbarWidth: 'thin',
                 scrollbarColor: 'rgba(102, 126, 234, 0.6) rgba(255, 255, 255, 0.1)'
               }}>
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 border border-blue-400/30">
                  <img src="/mascot.svg" alt="IETE Assistant" className="w-8 h-8 mx-auto mt-1" />
                </div>
                <p className="text-white/90 text-sm">Hi! I'm here to help you with IETE Student Forum questions.</p>
                <p className="text-white/60 text-xs mt-1">Ask me about events, membership, or anything else!</p>
              </div>
            )}
            
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <div className="p-2 bg-blue-500/20 rounded-full border border-blue-400/30">
                          <img src="/mascot.svg" alt="IETE Assistant" className="w-5 h-5" />
                        </div>
                      )}
                      <div className={`p-3 rounded-lg shadow-lg ${message.sender === 'user' 
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border border-blue-400/30' 
                        : 'bg-slate-700/50 text-white border border-slate-600/30 backdrop-blur-sm'}`}>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.sender === 'user' 
                          ? 'text-blue-100' 
                          : 'text-white/60'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      {message.sender === 'user' && (
                        <div className="p-2 bg-green-500/20 rounded-full border border-green-400/30">
                          <User className="h-4 w-4 text-green-300" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start gap-2">
                  <div className="p-2 bg-blue-500/20 rounded-full border border-blue-400/30">
                    <img src="/mascot.svg" alt="IETE Assistant" className="w-5 h-5" />
                  </div>
                  <div className="p-3 rounded-lg bg-slate-700/50 border border-slate-600/30 backdrop-blur-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="border-t border-blue-400/20 p-4 bg-slate-800">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything about IETE Student Forum..."
                className="flex-1 bg-slate-700/50 border-slate-600/30 text-white placeholder:text-white/60 focus:border-blue-400/50 focus:ring-blue-400/20"
              />
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleSendMessage(inputValue);
                }}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border border-blue-400/30"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}