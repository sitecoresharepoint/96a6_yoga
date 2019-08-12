import React, {Fragment} from 'react';
import { StyleSheet, TextInput, TextInputProps } from "react-native";
  
import colors from "../config/colors";

const FormTextInput = ({ style, ...otherProps }) => {
    return (
        <TextInput
            selectionColor={colors.DODGER_BLUE}
            placeholderTextColor={colors.WHITE}
            style={[styles.textInput, style]}
            {...otherProps}
        />
      );  
}

const styles = StyleSheet.create({
    textInput: {
      height: 40,
      borderColor: colors.SILVER,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 20,
      color: colors.WHITE
    }
  });

export default FormTextInput;