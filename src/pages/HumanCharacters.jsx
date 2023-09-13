import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';

function HumanCharacters({ characters }) {
  const humanCharacters = characters.filter(character => character.species === 'Human');

  return (
    <div className="container">
      <h2>Human Characters</h2>
      <div className="character-list">
        {humanCharacters.map(character => (
          <div className="character-card" key={character.id}>
            <Link to={`/character/${character.id}`}> {}
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export { HumanCharacters };
