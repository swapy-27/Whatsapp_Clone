
import './App.css';
import Chat from './components/chat';
import Sidebar from './components/sidebar';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (

    <div className="app">
      {/* <div className='app_body'>

<Sidebar />
<Chat />
</div> */}
      <Router>
        <Routes >
          <Route path='/' exact element={<Login />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
