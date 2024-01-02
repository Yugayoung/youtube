import React, { useState } from 'react';
import { BsYoutube, BsSearchHeart } from 'react-icons/bs';

export default function SearchHeader() {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.prevenDefault();
  };
  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearchHeart />
        </button>
      </form>
    </header>
  );
}
