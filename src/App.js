import React, { useState } from 'react';
import './App.css';
import ChangeBackgroundColor from './components/ChangeBackgroundColor';
import DisplayMessage from './components/DisplayMessage';
import ClickCounter from './components/ClickCounter';
import ToggleText from './components/ToggleText';
import AddToList from './components/AddToList';
import TestProps from './components/TestProps';
import TestUseState from './components/TestUseState';

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
      case 'TestProps':
        return (
        <div>
          <TestProps title="Learn ReactJs" subtitle="with Create React App" description="Learn ReactJs with Create React App" />
          <TestProps title="Learn ExpressJs" subtitle="Create backendApp" description="Learn Express and MongoDBto Complete the project with Create React App" />
        </div>
      );
      case 'TestUseState':
        return <TestUseState />;
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
        <button onClick={() => setSelectedExercise('TestProps')}>
          TestProps
        </button>
        <button onClick={() => setSelectedExercise('TestUseState')}>
          TestUseState
        </button>
      </div>
      <div className="exercise-container">{renderExercise()}</div>
    </div>
  );
}

export default App;
