import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput, Alert, Button } from 'react-native';
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

        <View style={styles.button}>
          <Button
            onPress = { () => {
              Alert.alert("Thanks for subscribing, stay tuned!");
            }}
            title = "Subscribe"
            color = "#044004"
            disabled = {!isTheEmailAddressValid}
          >
            Subscribe
          </Button>
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
  button : {
    marginLeft: 25,
    marginRight: 25,
    display: 'stretch',
    alignSelf: 'stretch',
    overflow: 'hidden',
    borderRadius: 8,
    height: 38,
  }
})