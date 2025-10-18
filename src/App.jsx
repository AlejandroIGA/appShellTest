import './App.css'

function App() {
  const songsData = [
  { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen' },
  { id: 2, title: 'Stairway to Heaven', artist: 'Led Zeppelin' },
  { id: 3, title: 'Hotel California', artist: 'Eagles' },
  { id: 4, title: 'Like a Rolling Stone', artist: 'Bob Dylan' },
  { id: 5, title: 'Smells Like Teen Spirit', artist: 'Nirvana' },
  { id: 6, title: 'Imagine', artist: 'John Lennon' },
];

  return (
    <>
      <header className="app-header">
      <h1> Music PWA</h1>
    </header>
    <nav className="main-menu">
      <ul>
        <li><a href="#" className="active">Inicio</a></li>
        <li><a href="#">Playlists</a></li>
        <li><a href="#">Buscar</a></li>
        <li><a href="#">Perfil</a></li>
      </ul>
    </nav>
    <main className="app-main">
        {songsData.map(song => (
          <li key={song.id} className="song-item">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </li>
        ))}
      </main>
    <footer className="app-footer">
      <p>&copy; 2025 React PWA. Todos los derechos reservados.</p>
    </footer>
    </>
  )
}

export default App
