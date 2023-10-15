import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./style";
import colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress, style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressedButton]
            : styles.innerContainer
        }
        android_ripple={{ color: colors.primary600 }}
        onPress={onPress}
        {...props}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
