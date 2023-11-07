import React from 'react';
import MainLayout from '../layout/MainLayout';
import {Text} from 'react-native';

export default function AboutScreen() {
  const appName = 'Todo List App';
  const name = 'Stephanie Martyna';
  const date = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text> {appName} </Text>
      <Text> {name} </Text>
      <Text> {date} </Text>
    </MainLayout>
  );
}
