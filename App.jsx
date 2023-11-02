import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import {SafeAreaView} from 'react-native';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = taskText => {
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

export default App;
