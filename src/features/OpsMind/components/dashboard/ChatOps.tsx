import React from 'react';
import { Send, Bot, User, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export const ChatOps: React.FC = () => {
  const [messages, setMessages] = React.useState<Message[]>([
    { id: 1, text: "Hello! I'm OpsMind AI. How can I assist with your infrastructure today?", sender: 'ai', timestamp: new Date() }
  ]);
  const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), text: input, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = { 
        id: Date.now() + 1, 
        text: `I've analyzed the state of 'payment-api-prod'. Current CPU is 45% and memory is stable. However, I noticed a slight increase in latency for the /v1/checkout endpoint. Should I investigate the logs?`, 
        sender: 'ai', 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="glass-panel flex flex-col h-[500px] overflow-hidden">
      <div className="p-4 border-b border-white/5 bg-primary/5 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <BrainCircuit className="text-primary w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-sm">ChatOps Assistant</h3>
          <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">AI Processing Active</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${msg.sender === 'user' ? 'bg-secondary/20' : 'bg-primary/20'}`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4 text-secondary" /> : <Bot className="w-4 h-4 text-primary" />}
                </div>
                <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-secondary/20 text-white rounded-tr-none' : 'bg-white/5 text-white/90 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <div className="flex gap-2 p-2">
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]" />
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        )}
      </div>

      <div className="p-4 border-t border-white/5">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about your infrastructure..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all"
          />
          <button 
            onClick={handleSend}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
