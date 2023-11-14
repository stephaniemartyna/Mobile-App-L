import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useEffect} from 'react';

export default function ToDoForm({addTask}) {
  const [taskText, setTaskText] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    fetch('./tasks.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setTasks(data.tasks);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddTask = () => {
    addTask(taskText);
  };

  const handleAddRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomIndex];
    if (randomTask) {
      addTask(randomTask);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={text => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <Button title="Generate Random Task" onPress={handleAddRandomTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 0,
    marginTop: 20,
    height: 120,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
  },
});
