import { useState } from 'react';
import { encrypt, decrypt } from './encryptor.js';

function App() {
  const [text, setText] = useState('');
  const [encrypted, setEncrypted] = useState('');
  const [decrypted, setDecrypted] = useState('');

  const handleEncrypt = () => {
    const result = encrypt(text);
    setEncrypted(result);
    setDecrypted(''); 
  };

  const handleDecrypt = () => {
    const result = decrypt(encrypted);
    setDecrypted(result);
  };

  return (
    <div className="container">
      <h1>Lab: Cipher & Decipher</h1>

      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '0.5rem', width: '100%' }}
      />
      <br /><br />

      <button onClick={handleEncrypt}>Encrypt</button>
      <p><strong>Encrypted:</strong> {encrypted}</p>

      <button onClick={handleDecrypt}>Decrypt</button>
      <p><strong>Decrypted:</strong> {decrypted}</p>
    </div>
  );
}

export default App;
