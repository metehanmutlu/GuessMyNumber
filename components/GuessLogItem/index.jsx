import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.container}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;
