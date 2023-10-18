import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { SafeAreaView } from 'react-native';


function App() {
  return (
    <SafeAreaView>
      <ToDoForm />
      <ToDoList />
    </SafeAreaView>
  );
}

export default App;
