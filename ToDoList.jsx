import React from 'react';
import {
  Pressable,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
      <View>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={styles.task}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
