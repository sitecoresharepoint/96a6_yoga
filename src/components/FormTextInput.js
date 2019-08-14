import React, {Fragment} from 'react';
import { StyleSheet, TextInput, TextInputProps } from "react-native";
  
import colors from "../config/colors";

const FormTextInput = ({ style, passwordMode=false, ...otherProps }) => {
    return (
        <TextInput
            selectionColor={colors.DODGER_BLUE}
            placeholderTextColor={colors.WHITE}
            style={[styles.textInput, style]}
            secureTextEntry={passwordMode}
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