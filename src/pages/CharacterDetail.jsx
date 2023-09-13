import React from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail({ characters }) {
  const { characterId } = useParams();
  const character = characters.find(character => character.id === parseInt(characterId, 10));

  if (!character) {
    return <div>Personagem não encontrado.</div>;
  }

  return (
    <div className="container">
      <h2>{character.name}</h2>
      <div className="character-details">
        <img src={character.image} alt={character.name} />
        <p>Status: {character.status}</p>
        <p>Espécie: {character.species}</p>
        {}
      </div>
    </div>
  );
}

export default CharacterDetail;
