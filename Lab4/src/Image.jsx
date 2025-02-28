import React, { useState } from "react";

const DuckDuckGoImageSearch = () => {
    const [query, setQuery] = useState("");
    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState(null);

    const fetchImage = async () => {
        if (!query.trim()) return;

        try {
            const response = await fetch(`https://api.duckduckgo.com/?q=${query}&format=json`);
            const data = await response.json();

            if (data.Image) {
                setImageUrl(data.Image);
                setError(null);
            } else {
                setImageUrl(null);
                setError("No image found.");
            }
        } catch (err) {
            setImageUrl(null);
            setError("Error fetching image.");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>DuckDuckGo Image Search</h2>
            <input
                type="text"
                placeholder="Enter search query..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ padding: "10px", width: "60%" }}
            />
            <button onClick={fetchImage} style={{ marginLeft: "10px", padding: "10px" }}>
                Search
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {imageUrl && (
                <div style={{ marginTop: "20px" }}>
                    <img src={imageUrl} alt={query} style={{ width: "300px", borderRadius: "10px" }} />
                </div>
            )}
        </div>
    );
};

export default DuckDuckGoImageSearch;
