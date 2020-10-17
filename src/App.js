import React,{useState} from 'react';
import {Tabs,Tab} from 'react-bootstrap';

import './App.css';
import TodoList from "./components/TodoList";
import Gallery from './components/Gallery';
function App() {
  const [key, setKey] = useState('Todo');
  return (
    <Tabs
      id="tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="Todo" title="TODO">
        <TodoList />
      </Tab>
      <Tab eventKey="Gallery" title="Gallery">
        <Gallery />
      </Tab>
  
    </Tabs>
      
  );
}

export default App;
