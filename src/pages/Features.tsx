import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot, User } from "lucide-react";

const API_KEY = "AIzaSyDCk29ynsFOIsoTlkQkXZiF1OxsvXEeSfw";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Features = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await model.generateContent(input);
      const response = await result.response;
      const botMessage = { role: "bot", text: response.text() };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error generating content:", error);
      const errorMessage = {
        role: "bot",
        text: "Sorry, I'm having trouble connecting. Please check your API key and try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Multi-lingual Story Generator
          </h1>

          <div className="bg-card border rounded-lg shadow-lg h-[60vh] flex flex-col">
            <div className="flex-grow p-4 space-y-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    msg.role === "user" ? "justify-end" : ""
                  }`}
                >
                  {msg.role === "bot" && (
                    <Bot className="w-6 h-6 text-primary" />
                  )}
                  <div
                    className={`p-3 rounded-lg max-w-[80%] ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                  {msg.role === "user" && (
                    <User className="w-6 h-6" />
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-3">
                  <Bot className="w-6 h-6 text-primary" />
                  <div className="p-3 rounded-lg bg-muted">
                    <p className="text-sm">Generating story...</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tell me a story about..."
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  disabled={isLoading}
                />
                <Button onClick={sendMessage} disabled={isLoading}>
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
