import {
  View,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import PrimaryButton from "../../components/PrimaryButton";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleNumberInput = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <ScrollView style={styles.root}>
      <KeyboardAvoidingView style={styles.root} behavior="position">
        <Text style={styles.title}>Guess My Number</Text>
        <View style={styles.container}>
          <Text style={styles.instructionText}>Enter a number</Text>
          <TextInput
            style={styles.textInput}
            maxLength={2}
            keyboardType="number-pad"
            value={enteredNumber}
            onChangeText={handleNumberInput}
            onSubmitEditing={(e) => console.log(e)}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
