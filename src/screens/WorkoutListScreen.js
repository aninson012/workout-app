import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import workouts from '../data/workouts';

export default function WorkoutListScreen({ navigation }) {
  // Tracks which workout ids are marked as favourite, independently per card.
  const [favourites, setFavourites] = useState({});

  const toggleFavourite = (id) => {
    setFavourites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello 👋</Text>
        <Text style={styles.heading}>Find your workout</Text>
      </View>

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <WorkoutCard
            image={item.image}
            title={item.title}
            duration={item.duration}
            calories={item.calories}
            isFavourite={!!favourites[item.id]}
            onToggleFavourite={() => toggleFavourite(item.id)}
            onPress={() => navigation.navigate('WorkoutDetails', { workout: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  greeting: {
    fontSize: 14,
    color: '#8A8FA3',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E2233',
    marginTop: 2,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  row: {
    justifyContent: 'space-between',
  },
});
