import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function KittenView({ route }) {
  const { kitten } = route.params;

  return (
    <ScrollView>
      <View>
        <Image
          style={styles.kittenImage}
          source={{ uri: `https://placekitten.com/300/300` }}
        />
        <Text style={styles.kittenName}>{kitten.name}</Text>
        <Text style={styles.kittenDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  kittenImage: {
    width: 450,
    height: 450,
  },
  kittenName: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 30,
  },
  kittenDescription: {
    margin: 20,
  },
});
