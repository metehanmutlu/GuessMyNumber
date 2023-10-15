import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import DismissKeyboard from "./components/DismissKeyboard";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [screenIndex, setScreenIndex] = useState(0);
  const [pickedNumber, setPickedNumber] = useState(null);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const onPickNumber = (number) => {
    setPickedNumber(number);
    setScreenIndex(1);
  };

  const onGameOver = (guessRounds) => {
    setScreenIndex(2);
    setRoundsNumber(guessRounds);
  };

  const onStartNewGame = () => {
    setPickedNumber(null);
    setRoundsNumber(0);
    setScreenIndex(0);
  };

  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={[colors.primary700, colors.secondary500]}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {screenIndex === 0 && <StartGameScreen onPickNumber={onPickNumber} />}
          {screenIndex === 1 && (
            <GameScreen pickedNumber={pickedNumber} onGameOver={onGameOver} />
          )}
          {screenIndex === 2 && (
            <GameOverScreen
              roundsNumber={roundsNumber}
              pickedNumber={pickedNumber}
              onStartNewGame={onStartNewGame}
            />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15,
  },
});
