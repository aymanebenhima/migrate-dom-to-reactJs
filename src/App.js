import React, { useState } from 'react';
import './App.css';
import ChangeBackgroundColor from './components/ChangeBackgroundColor';
import DisplayMessage from './components/DisplayMessage';
import ClickCounter from './components/ClickCounter';
import ToggleText from './components/ToggleText';
import AddToList from './components/AddToList';
function App() {
  const [selectedExercice, setSelectedExercise] = useState(null);

  const renderExercise = () => {
    switch (selectedExercice) {
      case 'ChangeBackgroundColor':
        return <ChangeBackgroundColor />;
      case 'DisplayMessage':
        return <DisplayMessage />;
      case 'ClickCounter':
        return <ClickCounter />;
      case 'ToggleText':
        return <ToggleText />;
      case 'AddToList':
        return <AddToList />;
      default:
        return null;
    }
  }
  return (
    <div className="app">
       <h1>Migration de Projets vers React</h1>
      <div className="container">
        <button onClick={() => setSelectedExercise('ChangeBackgroundColor')}>
          Changer la Couleur de Fond
        </button>
        <button onClick={() => setSelectedExercise('DisplayMessage')}>
          Afficher un Message
        </button>
        <button onClick={() => setSelectedExercise('ClickCounter')}>
          Compteur de Clics
        </button>
        <button onClick={() => setSelectedExercise('ToggleText')}>
          Afficher/Masquer un Texte
        </button>
        <button onClick={() => setSelectedExercise('AddToList')}>
          Ajouter à une Liste
        </button>

      </div>
      <div className="exercise-container">{renderExercise()}</div>
    </div>
  );
}

export default App;
