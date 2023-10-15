import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.secondary500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
  },
  numberText: {
    color: colors.secondary500,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
});
