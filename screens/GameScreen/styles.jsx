import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  instructionText: {
    color: colors.secondary500,
    fontSize: 24,
    marginVertical: 12,
  },
  listContainer: {
    margin: 24,
    flex: 1,
  },
});
