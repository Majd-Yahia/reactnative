import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';

import Header from './Components/Header';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem';

const App = () => {

  const [items, setItems] = useState([
    { id: '1', text: 'Milk' },
    { id: '2', text: 'Eggs' },
    { id: '3', text: 'Bread' },
    { id: '4', text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter((item) => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }]);
    } else {
      setItems(prevItems => {
        return [...prevItems, { id: '7', text }]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
