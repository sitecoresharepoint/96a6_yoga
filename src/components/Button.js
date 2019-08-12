import React, {Fragment} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
  } from 'react-native';
  
import colors from "../config/colors";

const Button = ({label, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
          <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
      );  
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.WHITE,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  text: {
    color: colors.BLACK,
    textAlign: "center",
    height: 20,
    fontWeight: "bold"
  }
});

export default Button;