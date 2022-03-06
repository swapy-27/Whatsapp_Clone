
import './App.css';
import Chat from './chat';
import Sidebar from './sidebar';

function App() {
  return (
    <div className="app">
      <div className='app_body'>

        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
