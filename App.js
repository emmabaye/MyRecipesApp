/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RecipeListItem from './components/RecipeListItem';

const App = () => {
  const recipes = [
    'Continental Egusi',
    'Ofe Oha',
    'Efo riro',
    'Afang Special',
    'Ofe Onugbu',
    'Jollof Rice',
    'Fried Rice',
    'Beans Porridge',
  ];

  const [numberOfRecipesSelected, setNumberOfRecipesSelected] = useState(0);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.title}>My Recipes</Text>
        <View style={styles.addRecipeToList}>
          {numberOfRecipesSelected > 0 ? (
            <TouchableOpacity>
              <Icon
                style={styles.deleteIcon}
                name="trash-can-outline"
                size={30}
                color="#A7A3A3"
              />
              <Text style={styles.addDeleteRecipeText}>
                Delete {numberOfRecipesSelected}/{recipes.length}
              </Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}
          <TouchableOpacity style={styles.addRecipeTouchable}>
            <Icon name="playlist-plus" size={30} color="#BFBDBD" />
            <Text style={styles.addDeleteRecipeText}>Add Recipe</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollViewContentContainerStyle}
          style={styles.scrollView}>
          {recipes.map((recipeName, index) => (
            <RecipeListItem
              key={index}
              recipeName={recipeName}
              index={index}
              numberOfRecipesSelected={numberOfRecipesSelected}
              setNumberOfRecipesSelected={setNumberOfRecipesSelected}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgb(250, 250, 250)',
  },
  scrollViewContentContainerStyle: {
    paddingBottom: 140,
  },
  title: {
    position: 'relative',
    left: 27,
    marginTop: 22,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 24,
  },
  addRecipeToList: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 27,
    marginLeft: 28,
    marginBottom: 27,
  },
  addDeleteRecipeText: {
    color: '#BFBDBD',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
  },
  addRecipeTouchable: {
    alignItems: 'flex-end',
  },
  deleteIcon: {
    position: 'relative',
    left: -5,
  },
});

export default App;
