import React, { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // TODO: Implement search logic
            alert('Search for: ' + query);
        }
    }

    return (
        <input
            type='text'
            value={query}
            onChange={e => setQuery(e.target.value.trim())}
            onKeyDown={handleKeyDown}
            placeholder='Search'
        />
    );
}

export default Search;
