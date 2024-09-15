import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputName, setInputName] = useState();
  const [editNname, setEditName] = useState();

  function handleEditClick() {
    setIsEditing(true);
  }

  function getName() {
    setIsEditing(false);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={isEditing ? getName : handleEditClick}>
        {isEditing ? 'SAVE' : 'EDIT'}
      </button>
    </li>
  );
}
