import './App.css';
import { useState, useEffect } from 'react';
import HeaderComponent from './components/header/HeaderComponent';
import InputComponent from './components/input/InputComponent';
import TaskContainer from './components/tasks/TaskContainer';


function App() {
  const savedTasks = (localStorage.getItem('tasks'));
  const initialState = savedTasks !== null ? JSON.parse(savedTasks) : [];

  const [tasks, setTasks] = useState(initialState);

  const addTask = (task) =>{
    const id = tasks.length;
    const date = new Date();
    const newTask = {
      'task': task,
      'date': date.toISOString(),
      'active': true,
      'id': id
    }
    setTasks([...tasks, newTask]);
  }

  const removeTask = (taskToRemove) =>{
    setTasks(tasks.filter(obj => obj !== taskToRemove));
  }

  useEffect(()=>{
    // update the local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <div className="container">
        <HeaderComponent />
        <InputComponent onClick={addTask}/>
        <TaskContainer tasks={tasks} removeTask={removeTask}/>
      </div>
    </div>
  );
}

export default App;
