async function handleFilterData(node, data) {
    try {
      data.forEach(item => {
        item[node.column] = item[node.column].toLowerCase();
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  async function handleWait(node, data) {
    try {
      await new Promise(resolve => setTimeout(resolve, node.delay * 1000));
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  async function handleConvertFormat(node, data) {
    try {
      const jsonData = data.map(item => JSON.stringify(item));
      return jsonData;
    } catch (error) {
      throw error;
    }
  }
  
  async function handleSendPostRequest(node, data) {
    try {
      const response = await axios.post(node.url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  module.exports = {
    handleFilterData,
    handleWait,
    handleConvertFormat,
    handleSendPostRequest
  };
  