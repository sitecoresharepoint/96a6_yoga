import React, {useState} from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import {
    StyleSheet,
    View,
    Image,
    Text
  } from 'react-native';

  import imageLogo from "../assets/img/logo.png";
  import FormTextInput from "../components/FormTextInput";
  import Button from "../components/Button";
  import colors from "../config/colors";
  import strings from "../config/strings";

  const Login = ({navigation}) => {
      const [password, setPassword] = useState('');
      const [email, setEmail] = useState('');
      const [errorMsg, setError] = useState('');

      handleEmailChange = (email) => {
        setEmail(email);
      };

      handlePasswordChange = (password) => {
        setPassword(password);
      };

      handleLoginPress = () => {
        if (email === "admin" && password === "admin"){
          // alert(email + " berhasil login...");
          navigation.navigate({ routeName: 'PostList' })
        }
        else{
          setEmail("");
          setPassword("")
          setError("Invalid username or password!")
        }
      };
    

      return(
          <View style={styles.container}>
              <Image source={imageLogo} style={styles.logo} />
              <View style={styles.form}>
                    <FormTextInput
                            value={email}
                            onChangeText={this.handleEmailChange}
                            placeholder={strings.EMAIL_PLACEHOLDER}
                        />
                    <FormTextInput
                            value={password}
                            onChangeText={this.handlePasswordChange}
                            placeholder={strings.PASSWORD_PLACEHOLDER}
                            passwordMode={true}
                        />
                    <Text style={styles.warning}>{errorMsg}</Text>
                    <Button 
                            label={strings.LOGIN}
                            onPress={this.handleLoginPress}
                    />
                    
                    <Text style={styles.text}>Forgot Password</Text>
              </View>
              
          </View>
      )
  };

  const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: colors.BLACK,
      alignItems: "center",
      justifyContent: "space-between",
      height: "100%"
    },
    logo: {
    //   flex: 1,
      width: "100%",
      resizeMode: "contain",
      alignSelf: "center"
    },
    form: {
    //   flex: 1,
      justifyContent: "center",
      width: "80%",
      color: colors.WHITE
    },
    text: {
      color: colors.WHITE,
      textAlign: "center",
      height: 20
    },
    warning: {
      color: colors.TORCH_RED,
      textAlign: "center",
      height: 20
    }
  });

  export default Login;