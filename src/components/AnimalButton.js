import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function AnimalButton({ top, left, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { top, left }]}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255, 0, 0, 0.6)",
    borderWidth: 2,
    borderColor: "#fff",
  },
});
