import Card from './components/Card';
import { useCounter } from './useCounter';
import { useState, useEffect } from 'react';

export const HookBreakingBad = () => {
    const { counter, decrement, increment } = useCounter(1);
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (quotes.length < counter) {
            setLoading(true);
            fetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.length > 0) {
                        setQuotes(prev => [...prev, data[0]]);
                    }
                    setLoading(false);
                });
        }
    }, [counter, quotes]);

    return (
        <div>
            <h1>API de Breaking Bad</h1>
            <hr />

            {loading ? <p>Loading...</p> : (
                <Card
                    id={counter}
                    quote={quotes[counter-1]?.quote}
                    author={quotes[counter-1]?.author}
                />
            )}

            <button 
                className="btn btn-primary" 
                onClick={() => counter > 1 && decrement()}
                disabled={counter <= 1}
            >
                Anterior
            </button>
            <button className="btn btn-primary" onClick={() => increment()}>
                Siguiente
            </button>
        </div>
    );
};