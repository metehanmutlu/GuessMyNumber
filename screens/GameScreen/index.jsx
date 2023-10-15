import { View, Text, Alert, FlatList } from "react-native";
import React, { memo, useEffect, useState } from "react";
import styles from "./styles";
import NumberContainer from "../../components/NumberContainer";
import PrimaryButton from "../../components/PrimaryButton";
import Card from "../../components/Card";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../../components/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  if (rndNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ pickedNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, pickedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < pickedNumber) ||
      (direction === "higher" && currentGuess > pickedNumber)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }
    let newRndNum;
    switch (direction) {
      case "lower":
        maxBoundary = currentGuess;
        break;
      case "higher":
        minBoundary = currentGuess + 1;
        break;
      default:
        break;
    }
    newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNum);
    setGuessRounds((prev) => [...prev, newRndNum]);
  };

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, pickedNumber]);

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text style={styles.instructionText}>Higher or Lower</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              style={{ flex: 1 }}
              onPress={() => nextGuessHandler("lower")}
            >
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
            <PrimaryButton
              style={{ flex: 1 }}
              onPress={() => nextGuessHandler("higher")}
            >
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              guess={itemData.item}
              roundNumber={guessRounds.length - itemData.index}
            />
          )}
          keyExtractor={(item, i) => i}
        />
      </View>
    </View>
  );
};

export default GameScreen;
