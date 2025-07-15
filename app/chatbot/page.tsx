'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, MessageCircle, HelpCircle, Clock, MapPin, Calendar } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

const quickQuestions = [
  'How do I join the forum?',
  'What are the upcoming events?',
  'What are the membership benefits?',
  'How can I contact the team?',
  'What technical domains do you cover?',
  'How often are events organized?',
];

const faqData = {
  'how do i join': {
    response: 'To join the IETE Student Forum, you can fill out our membership application form. Visit our Join Us page and complete the application with your academic details and technical interests. The process typically takes 5-7 business days for approval.',
    suggestions: ['View membership requirements', 'Check application status', 'Contact admissions team'],
  },
  'upcoming events': {
    response: 'We have several exciting events coming up! Our next events include: IoT Workshop on March 15th, Circuit Design Competition on March 22nd, and Industry Expert Talk on 5G Technology on March 28th. Check our Events page for detailed information.',
    suggestions: ['View all events', 'Register for events', 'Event calendar'],
  },
  'membership benefits': {
    response: 'As a member, you get access to exclusive workshops, networking opportunities with industry professionals, technical resources, participation in competitions, and skill development programs. Members also get priority access to events and can contribute to forum publications.',
    suggestions: ['Learn more about benefits', 'Member testimonials', 'Join now'],
  },
  'contact team': {
    response: 'You can reach our team through multiple channels: Email us at info@iete-srm.edu, call us at +91 44 1234 5678, or visit our office at SRM Institute Vadapalani Campus. Our office hours are Monday-Friday, 9:00 AM - 5:00 PM.',
    suggestions: ['Send message', 'Office directions', 'Team members'],
  },
  'technical domains': {
    response: 'We cover various technical domains including Electronics Design, Embedded Systems, IoT Development, Signal Processing, Power Electronics, Telecommunications, VLSI Design, PCB Design, Robotics, and Renewable Energy systems.',
    suggestions: ['View projects', 'Domain experts', 'Technical resources'],
  },
  'events frequency': {
    response: 'We organize events regularly throughout the academic year. Typically, we have 2-3 technical workshops per month, 1 major competition per semester, and monthly seminars with industry experts. Special events are also organized during technical festivals.',
    suggestions: ['Event calendar', 'Past events', 'Event feedback'],
  },
};

function findBestMatch(input: string): string | null {
  const normalizedInput = input.toLowerCase();
  
  for (const key in faqData) {
    if (normalizedInput.includes(key) || key.includes(normalizedInput)) {
      return key;
    }
  }
  
  // Check for keyword matches
  if (normalizedInput.includes('join') || normalizedInput.includes('membership')) return 'how do i join';
  if (normalizedInput.includes('event') || normalizedInput.includes('workshop')) return 'upcoming events';
  if (normalizedInput.includes('benefit') || normalizedInput.includes('advantage')) return 'membership benefits';
  if (normalizedInput.includes('contact') || normalizedInput.includes('reach')) return 'contact team';
  if (normalizedInput.includes('domain') || normalizedInput.includes('technical') || normalizedInput.includes('subject')) return 'technical domains';
  if (normalizedInput.includes('how often') || normalizedInput.includes('frequency')) return 'events frequency';
  
  return null;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m the IETE Student Forum chatbot. I can help you with information about our events, membership, and activities. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date(),
      suggestions: quickQuestions.slice(0, 3),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const matchedKey = findBestMatch(text);
    let botResponse: Message;

    if (matchedKey && faqData[matchedKey as keyof typeof faqData]) {
      const faqItem = faqData[matchedKey as keyof typeof faqData];
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: faqItem.response,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: faqItem.suggestions,
      };
    } else {
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: 'I\'m sorry, I don\'t have specific information about that. You can contact our team directly at info@iete-srm.edu or +91 44 1234 5678 for more detailed assistance. Is there anything else I can help you with?',
        sender: 'bot',
        timestamp: new Date(),
        suggestions: ['Contact team', 'View FAQ', 'Ask another question'],
      };
    }

    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Handle suggestion clicks - you can implement navigation or more specific responses
    if (suggestion.includes('Join now') || suggestion.includes('membership')) {
      window.location.href = '/join';
    } else if (suggestion.includes('events') || suggestion.includes('calendar')) {
      window.location.href = '/events';
    } else if (suggestion.includes('Contact')) {
      window.location.href = '/contact';
    } else {
      handleSendMessage(suggestion);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              AI <span className="gradient-text">Assistant</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Get instant answers to your questions about IETE Student Forum, our events, membership, and more!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Chatbot Interface */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <img src="/mascot.svg" alt="IETE Assistant" className="w-8 h-8" />
                  </div>
                  <span>IETE Assistant</span>
                  <Badge variant="secondary" className="ml-2">Online</Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                              <div className="p-2 bg-primary/10 rounded-full">
                                <img src="/mascot.svg" alt="IETE Assistant" className="w-6 h-6" />
                              </div>
                            )}
                            <div className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}>
                              <p className="text-sm">{message.text}</p>
                              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </div>
                            {message.sender === 'user' && (
                              <div className="p-2 bg-secondary/10 rounded-full">
                                <User className="h-4 w-4 text-secondary" />
                              </div>
                            )}
                          </div>
                          
                          {/* Suggestions */}
                          {message.suggestions && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {message.suggestions.map((suggestion, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  className="text-xs"
                                >
                                  {suggestion}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-2">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <img src="/mascot.svg" alt="IETE Assistant" className="w-6 h-6" />
                        </div>
                        <div className="p-3 rounded-lg bg-gray-100">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Input Area */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about IETE Student Forum..."
                      className="flex-1"
                    />
                    <Button 
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim() || isTyping}
                      className="gradient-bg"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Quick Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Click on any question below to get instant answers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickQuestions.map((question, index) => (
              <motion.div
                key={question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleQuickQuestion(question)}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <HelpCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">{question}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>24/7 Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI assistant is available round the clock to answer your questions
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Instant Responses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get immediate answers to your questions without waiting
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                    <HelpCircle className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Comprehensive Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get information about events, membership, and all forum activities
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}