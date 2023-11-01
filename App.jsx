import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';


function App() {
  
 // Use the useState hook to define a state variable to store the list of tasks.
//Initialize the state with the following array of hard-coded tasks:
//[
//  'Do laundry',
//  'Go to gym',
//  'Walk dog'
//]

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  
  return (
    <SafeAreaView>
      <ToDoForm />
      <ToDoList tasks={tasks} />

    </SafeAreaView>
  );
}

export default App;
