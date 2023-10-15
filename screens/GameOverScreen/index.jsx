import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import PrimaryButton from "../../components/PrimaryButton";

const GameOverScreen = ({ roundsNumber, pickedNumber, onStartNewGame }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highligtedText}>{roundsNumber}</Text> round to guess
        the number <Text style={styles.highligtedText}>{pickedNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;
