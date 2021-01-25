import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AppButton from '../components/AppButton';

import getKittens from '../redux/actions/kittens';

export default function KittenList({ navigation }) {
  const [renderCount, setRenderCount] = useState(100);
  const [filterCount, setFilterCount] = useState(100);

  const dispatch = useDispatch();

  const kittens = useSelector(state => state.kittens.kittens);
  const loading = useSelector(state => state.kittens.loading);
  const error = useSelector(state => state.kittens.error);

  useEffect(() => {
    dispatch(getKittens());
  }, [dispatch]);

  const filterKittens = filterCount => {
    switch (filterCount) {
      case 30:
        setRenderCount(filterCount);
        break;
      case 50:
        setRenderCount(filterCount);
        break;
      case 100:
        setRenderCount(filterCount);
        break;
      default:
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
    >
      <View style={styles.listContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setFilterCount(text)}
          defaultValue=""
        />
        <Button onPress={() => setRenderCount(filterCount)} title="Filter" />
        <View style={styles.buttonsContainer}>
          <AppButton onPress={() => filterKittens(30)} title="30" />
          <AppButton onPress={() => filterKittens(50)} title="50" />
          <AppButton onPress={() => filterKittens(100)} title="100" />
        </View>
        {loading && <ActivityIndicator size="large" />}
        {!kittens && !loading && (
          <Text>Couldn&apos;t connect to the internet</Text>
        )}
        {error && !loading && <Text>{error}</Text>}
        {kittens &&
          kittens.slice(0, renderCount).map(kitten => (
            <TouchableOpacity
              style={styles.kittensContainer}
              key={kitten.id}
              onPress={() => {
                navigation.navigate('KittenView', {
                  kitten,
                });
              }}
            >
              <Image
                style={styles.kittenImage}
                source={{ uri: `https://placekitten.com/300/300` }}
              />
              <Text>{kitten.name}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1,
    marginTop: 20,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  kittensContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 40,
  },
  kittenImage: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
});
