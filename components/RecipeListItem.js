import React, {useState} from 'react';
import {TouchableNativeFeedback, View, StyleSheet, Text} from 'react-native';

const RecipeListItem = ({
  recipeName,
  index,
  numberOfRecipesSelected,
  setNumberOfRecipesSelected,
  navigation,
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableNativeFeedback
      onPress={(e) => {
        if (numberOfRecipesSelected > 0 && selected === false) {
          setNumberOfRecipesSelected(++numberOfRecipesSelected);
          return setSelected(true);
        }
        if (numberOfRecipesSelected > 0 && selected === true) {
          setNumberOfRecipesSelected(--numberOfRecipesSelected);
          return setSelected(false);
        }

        navigation.navigate('RecipeView');
      }}
      onLongPress={(e) => {
        if (selected) {
          setSelected(false);
          setNumberOfRecipesSelected(--numberOfRecipesSelected);
        } else {
          setSelected(true);
          setNumberOfRecipesSelected(++numberOfRecipesSelected);
        }
      }}>
      <View style={styles.recipe}>
        {selected && <View style={styles.overlay} />}
        <Text style={styles.recipeName}>{recipeName}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  recipe: {
    backgroundColor: '#FFD242',
    height: 70,
    borderRadius: 6,
    marginLeft: 27,
    marginRight: 27,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editDeleteIcons: {
    width: 60,
    marginRight: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  overlay: {
    width: '100%',
    position: 'absolute',
    alignItems: 'stretch',
    height: 70,
    backgroundColor: '#AC9F3C',
    borderRadius: 6,
    borderWidth: 2,
  },
  recipeName: {
    fontSize: 18,
    marginLeft: 20,
  },
});

export default RecipeListItem;
