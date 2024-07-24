import React, { useState } from 'react';
import searchIcon from '../../assets/icons/search-icon.svg';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // TODO: Implement search logic
            alert('Search for: ' + query);
        }
    }

    return (
        <div className="search-bar">
            <input
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Search'
                className="search-input"
            />
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
        </div>

    );
}

export default Search;
