import React, { useState, useEffect } from 'react';

const Card = ({ id, quote, author }) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (!author) return;

        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${author}`)
            .then(res => res.json())
            .then(data => setImageUrl(data.thumbnail?.source || null))
            .catch(() => setImageUrl(null));
    }, [author]);

    return (
        <section style={{ textAlign: "center", padding: 20 }}>
            <h2>#{id} - "{quote}"<br />- {author}</h2>
            {imageUrl && <img src={imageUrl} alt={author} style={{ width: 100, borderRadius: 10 }} />}
        </section>
    );
};

export default Card;
