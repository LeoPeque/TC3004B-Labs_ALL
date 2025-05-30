import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const callGemini = async () => {
    setLoading(true);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    let response;

    try {
      const result = await model.generateContent(input + "describe this piece of media in literally just 10 words. no more no less");
      const text = result.response.text();
      setResponse(text);
    } catch (error) {
      console.error(error);
      setResponse("error contacting gemini");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', alignItems: 'center', display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', }}>
      <h1 style={{ textAlign: 'center' }}> Gemini - 10 word media summary</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="Your favorite movie / song / book... etc..."
        style={{ width: '300px', padding: '8px', marginRight: '10px' }}
      />
      <button onClick={callGemini} disabled={loading}>
        {loading ? 'Thinking...' : 'Talk to Gemini'}
      </button>
      <p style={{ marginTop: '1rem' }}>{response}</p>
    </div>
  );
}

export default App;
