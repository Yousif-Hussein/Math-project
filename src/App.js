/*import logo from './logo.svg';
import './App.css';
import Header from './Main/Header'
import SideBar from './Main/SideBar';
import { Route,Routes } from 'react-router-dom';
import Content from './Main/Content';
function App() {
  return (
    <div className='app'>
        <SideBar/>
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/:topic/:section" element={<Content />} />
            <Route path="/" element={<h2>Select a topic and section</h2>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
*/
import './App.css';
import Navbar from './Main/Header';
import SideBar from './Main/SideBar';
import Content from './Main/Content';
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TopicProvider } from './Main/TopicContext';
function App() {
  const {topic}=useParams()
  let currentTopic= topic|| "exponents"
  return (
    <TopicProvider>
      <div className="app">
        <SideBar  />
        <Navbar currentTopic={currentTopic} />
        <div className="content">
          <Routes>
            <Route path="/" element={<h2></h2>} />
            <Route path="/:topic/:section" element={<Content currentTopic={currentTopic} />} />
            <Route path="*" element={<h2>404 - Not Found</h2>} />
          </Routes>
        </div>
      </div>
    </TopicProvider>
  );
}

export default App;