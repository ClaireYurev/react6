import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput, Alert, Button, Pressable } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {

  const [email, setEmail] = React.useState('');
  const isTheEmailAddressValid = validateEmail(email);

  return (
    <View style = {styles.container}>
      <View style = {styles.contentContainer}>
        <Image
          style = {styles.logo}
          source = { require("../assets/little-lemon-logo-grey.png") }
        />
        <Text style = {styles.title}>Subscribe to our newsletter for our latest delicious recipes!</Text>

        <TextInput 
          style = {styles.input}
          placeholder = 'Type your email'
          value = {email}
          onChangeText = {setEmail}
          keyboardType = "email-address"
          textContentType = "emailAddress"
        />
        
        <View style = {isTheEmailAddressValid ? styles.buttonEnabled : styles.buttonDisabled}>
          <Pressable onPress={ () => Alert.alert("Thanks for subscribing, stay tuned!") }
            disabled = {!isTheEmailAddressValid}>
            <Text style={styles.buttonText}>Newsletter</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container : {
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer : {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'stretch',
    alignSelf: 'stretch'
  },
  logo : {
    marginTop: 40,
    height: 120,
    width: 200,
    resizeMode: "contain"
  },
  title : {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 18,
    textAlign: 'center'
  },
  input : {
    marginBottom: 20,
    fontSize: 16,
    borderColor: "#000000",
    borderWidth: 1,
    height: 38,
    paddingLeft: 12,
    marginLeft: 25,
    marginRight: 25,
    display: 'stretch',
    alignSelf: 'stretch',
    overflow: 'hidden',
    borderRadius: 8
  },
  buttonEnabled : {
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: "#044004",
    padding: 5,
    borderRadius: 10,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  buttonDisabled : {
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: "#989898",
    padding: 5,
    borderRadius: 10,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  buttonText : {
    marginLeft: 24,
    marginRight: 24,
    textAlign: 'center',
    padding: 5,
    borderRadius: 10,
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: 'stretch',
    overflow: 'hidden',
  }
})