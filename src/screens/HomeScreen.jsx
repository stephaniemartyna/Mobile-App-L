import React from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import {useState} from 'react';
import MainLayout from '../layout/MainLayout';
import {Button, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = taskText => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />

      <Button
        style={styles.button}
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 100,
  },
});
