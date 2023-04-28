import { useState } from 'react'
import CharacterThumbnail from './components/CharacterThumbnail'
import CharacterModal from './components/CharacterModal'
import { thumbnails, modals } from './constant'
import './App.css'


function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="main">
      <header>
        <h1>Jujutsu Kaisen Characters</h1>
        <h5>Click the thumbnails to se a Modals</h5>
      </header>
      <CharacterThumbnail thumbnails={thumbnails} onClick={setSelectedId} />
      <CharacterModal modals={modals} onChange={selectedId} onClick={setSelectedId} />
      <div className={selectedId ? 'overlay' : 'hidden'}></div>
    </div>
  );
}

export default App
