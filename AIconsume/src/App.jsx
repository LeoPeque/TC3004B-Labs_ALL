import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function App() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const callGemini = async () => {
    setLoading(true);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    // Check if API key exists
    if (!apiKey) {
      setResponse("Error: VITE_GEMINI_API_KEY not found in environment variables.");
      setLoading(false);
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const result = await model.generateContent("Say something inspiring!");
      const text = await result.response.text();
      setResponse(text);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setResponse(`Error contacting Gemini API: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Gemini React Demo</h1>
      <button onClick={callGemini} disabled={loading}>
        {loading ? 'Thinking...' : 'Talk to Gemini'}
      </button>
      <p style={{ marginTop: '1rem' }}>{response}</p>
    </div>
  );
}

export default App;
