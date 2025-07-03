import { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/gpt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.choices?.[0]?.message?.content || '응답 없음');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>GPT에게 질문하기</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
        cols={50}
      />
      <br />
      <button onClick={handleSubmit}>질문하기</button>
      <pre>{response}</pre>
    </div>
  );
}

export default App;