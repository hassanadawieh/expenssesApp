import React from 'react';
import {View, Text, FlatList, StyleSheet , Dimensions} from 'react-native';

const renderExpenseItem = itemData => {
  return (
    <View>
      <Text>{itemData.item.description}</Text>
      {/* <Text>{itemData.item.}</Text> */}
      <Text>${itemData.item.amount}</Text>
    </View>
  );
};

const ExpensesList = ({expenses}) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    heigth : 
  },
});
