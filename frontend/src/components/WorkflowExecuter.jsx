import React, { useState } from 'react';
import axios from 'axios';

const WorkflowExecutor = () => {
  const [workflowId, setWorkflowId] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!workflowId || !file) {
      alert('Please select a workflow ID and upload a file');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(`http://localhost:5000/api/workflows/${workflowId}/execute`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      alert('Workflow execution successful');
    } catch (error) {
      console.error('Error executing workflow:', error);
      alert('Failed to execute workflow');
    }
  };

  return (
    <div>
      <h2>Workflow Execution</h2>
      <select value={workflowId} onChange={(e) => setWorkflowId(e.target.value)}>
        <option value="">Select Workflow ID</option>
        <option value="1">Workflow 1</option>
        <option value="2">Workflow 2</option>
      </select>
      <br />
      <input type="file" onChange={handleFileChange} />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default WorkflowExecutor;
