# Techstax Technical Assessment: React.js Workflow Builder Application

## Objective

This project aims to develop a comprehensive workflow builder application using React.js and Node.js. The application allows users to visually create workflows for basic data manipulation tasks and execute them with ease.

## Deployed Link

**Frontend** https://techstax-beta.vercel.app/

**Backend** https://techstax.onrender.com

## Setup Instructions

1. Clone the repository from GitHub.
2. Navigate to the project directory in the terminal.
3. Install dependencies:

```bash
npm install
```  
4. Start the frontend development server:

```bash
npm start
```

5. Start the backend server:

```bash
npm server.jsl
```

6. Access the application in your web browser.

## Features

1. *Workflow Creation:* Users can drag and drop predefined nodes onto the canvas to construct their desired workflows. These nodes include:
   - *Filter Data:* Converts column values to lowercase.
   - *Wait:* Introduces a 60-second delay in the workflow execution.
   - *Convert Format:* Transforms data from CSV to JSON format.
   - *Send POST Request:* Transmits JSON payload to a designated URL.

2. *Workflow Execution:* Users can upload data and select a workflow to trigger execution. The backend processes the workflow tasks in the defined sequence, handling errors gracefully and providing informative feedback to the user interface.

3. *Workflow Management:* The application provides functionalities to save and load previously created workflows, allowing users to efficiently manage their workflow configurations.

## Technology Stack

- *Frontend:*
  - React.js: Used for building the user interface and workflow creation functionality.
  - ReactFlow: Provides a drag-and-drop interface for constructing workflows.

- *Backend:*
  - Node.js: Employs Express.js for backend server implementation, handling workflow execution and data processing.
  - Database: Utilizes MongoDB/PostgreSQL for storing workflow definitions, providing scalability and data persistence.

## Scrreshots

![Screenshot 1](1.png)
![Screenshot 2](2.png)
![Screenshot 3](3.png)
![Screenshot 4](4.png)


