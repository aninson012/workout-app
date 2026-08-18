import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            image={workout.image}
            title={workout.title}
            duration={workout.duration}
            calories={workout.calories}
            isFavourite={!!favourites[workout.id]}
            onToggleFavourite={() => toggleFavourite(workout.id)}
            onPress={() =>
              navigation.navigate('WorkoutDetails', { workout })
            }
          />
        ))}
      </ScrollView>
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
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
});
