import React from 'react';
import './App.css';
import ProjectExpanded from "./components/ProjectExpanded";
import { Routes, Route } from 'react-router-dom';
import Main from "./components/main";




function App() {
    const projectRoute = "/projects/:id";

    return (
          <div className="App">
              <Routes>
                  <Route path='/' element={<Main/>}></Route>
                  <Route path={projectRoute} element={<ProjectExpanded/>} />
              </Routes>
          </div>
  );
}

export default App;