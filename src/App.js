
import './App.css';
import Chat from './components/chat';
import Sidebar from './components/sidebar';

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
