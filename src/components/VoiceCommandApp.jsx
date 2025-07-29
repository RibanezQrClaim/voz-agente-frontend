import { useState } from "react";
console.log("🎯 VoiceCommandApp cargado");

const Button = ({ onClick, children, variant }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded text-white ${
      variant === "secondary"
        ? "bg-blue-500"
        : variant === "outline"
        ? "border border-blue-500 text-blue-500"
        : "bg-green-600"
    }`}
  >
    {children}
  </button>
);

const Textarea = ({ value, onChange, placeholder, className }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`p-2 rounded border w-full ${className}`}
    rows={4}
  />
);

export default function VoiceCommandApp() {
  const [isRecording, setIsRecording] = useState(false);
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");

  const toggleRecording = () => {
    setIsRecording((prev) => !prev);
    // Aquí iría la lógica de grabación con MediaRecorder y envío a backend
  };

  const handleTextSubmit = async () => {
    const mockResponse = `Respuesta para: "${inputText}"`;
    setResponseText(mockResponse);
  };

  const playTTS = () => {
    const utterance = new SpeechSynthesisUtterance(responseText);
    speechSynthesis.speak(utterance);
  };

  return (
    <div style={{ background: 'white', padding: 20 }}>
      <h1 style={{ color: 'red' }}>✅ Render directo sin Tailwind</h1>
      <p>Este texto debería verse.</p>
    </div>
  );
}


