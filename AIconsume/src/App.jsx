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
    <div style={{ 
      padding: '3rem', 
      textAlign: 'center', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        color: '#333', 
        marginBottom: '2rem',
        fontSize: '2.5rem',
        fontWeight: '300'
      }}>
        Gemini - 10 Word Media Summary
      </h1>
      
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="Your favorite movie / song / book... etc..."
        style={{ 
          width: '400px', 
          padding: '12px 16px', 
          marginBottom: '20px',
          border: '2px solid #ddd',
          borderRadius: '25px',
          fontSize: '16px',
          outline: 'none',
          transition: 'border-color 0.3s',
        }}
        onFocus={(e) => e.target.style.borderColor = '#007bff'}
        onBlur={(e) => e.target.style.borderColor = '#ddd'}
      />
      
      <button 
        onClick={callGemini} 
        disabled={loading}
        style={{
          padding: '12px 30px',
          backgroundColor: loading ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.3s',
          marginBottom: '2rem'
        }}
        onMouseOver={(e) => !loading && (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => !loading && (e.target.style.backgroundColor = '#007bff')}
      >
        {loading ? 'Thinking...' : 'Get Summary'}
      </button>
      
      {response && (
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          maxWidth: '500px',
          fontSize: '18px',
          lineHeight: '1.6',
          color: '#333'
        }}>
          {response}
        </div>
      )}
    </div>
  );
}

export default App;
