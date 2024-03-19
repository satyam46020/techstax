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
      formData.append('workflowId', workflowId);
      formData.append('file', file);

      const response = await axios.post('http://localhost:5000/api/workflows/' + workflowId + '/execute', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error executing workflow:', error);
    }
  };

  return (
    <div>
      <select value={workflowId} onChange={(e) => setWorkflowId(e.target.value)}>
        <option value="">Select Workflow ID</option>
        <option value="1">Workflow 1</option>
        <option value="2">Workflow 2</option>
      </select>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default WorkflowExecutor;
