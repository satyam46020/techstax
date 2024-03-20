import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import UploadData from './pages/UploadData';
import WorkflowBuilder from './components/WorkflowBuilder';
import WorkflowExecutor from './components/WorkflowExecuter';
import DnDFlow from './components/DnDFlow';

const App = () => {
  return (
    <Routes>
        {/* <Route path="/" element={<Home/>} />
        <Route path="/upload" element={<UploadData/>} /> */}
        <Route path="/builder" element={<WorkflowBuilder/>} />
        <Route path="/execution" element={<WorkflowExecutor/>} />
     </Routes>
     
  );
};

export default App;