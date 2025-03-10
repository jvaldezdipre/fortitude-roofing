
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageSquare, 
  X, 
  Send, 
  User,
  UserRound
} from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'agent' }[]>([
    { text: 'Hello! How can I help you with your roofing needs today?', sender: 'agent' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (newMessage.trim() === '') return;

    // Add user message
    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');

    // Simulate agent response after a delay
    setTimeout(() => {
      const responses = [
        "Thank you for your message! A roofing specialist will get back to you shortly.",
        "I'd be happy to help you with that. Could you provide more details about your roofing project?",
        "We offer free inspections for all potential clients. Would you like to schedule one?",
        "Our team is available for emergency services 24/7. Would you like me to connect you with our emergency line?",
        "Thanks for reaching out! We service the entire Portland metro area. When would be a good time to discuss your needs?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'agent' }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Widget Button */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-roofing-teal text-white shadow-lg hover:bg-roofing-teal/90 transition-all ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`bg-white rounded-lg shadow-xl w-full max-w-sm transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'scale-100 opacity-100'
            : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat Header */}
        <div className="bg-roofing-teal text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-3 bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
              <UserRound className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium">PeakRoof Support</h3>
              <p className="text-xs text-white/80">Typically replies within minutes</p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="p-4 h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'agent' && (
                <div className="flex-shrink-0 mr-2">
                  <div className="w-8 h-8 rounded-full bg-roofing-teal flex items-center justify-center text-white">
                    <UserRound className="h-5 w-5" />
                  </div>
                </div>
              )}
              <div
                className={`px-4 py-2 rounded-lg max-w-[75%] ${
                  message.sender === 'user'
                    ? 'bg-roofing-teal text-white rounded-tr-none'
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                }`}
              >
                {message.text}
              </div>
              {message.sender === 'user' && (
                <div className="flex-shrink-0 ml-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
                    <User className="h-5 w-5" />
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="border-t p-3">
          <div className="flex items-end">
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-grow resize-none mr-2"
              rows={1}
            />
            <Button
              onClick={handleSend}
              size="sm"
              className="bg-roofing-teal hover:bg-roofing-teal/90"
              disabled={!newMessage.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
