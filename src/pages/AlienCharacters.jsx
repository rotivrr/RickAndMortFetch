import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';

function AlienCharacters({ characters }) {
  const alienCharacters = characters.filter(character => character.species === 'Alien');

  return (
    <div className="container">
      <h2>Alien Characters</h2>
      <div className="character-list">
        {alienCharacters.map(character => (
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

export { AlienCharacters };
