import * as React from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.contentContainer}>
        <Image
          style = {styles.logo}
          source = { require("../assets/little-lemon-logo.png") }
        />
        <Text style = {styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <View style = {styles.button}>
        <Button
          onPress = { () => {
            navigation.navigate("Subscribe");
          }}
          title = "Newsletter"
          color = "#044004"
        >
          Newsletter
        </Button>
      </View>
    </View>
  );
};

export default WelcomeScreen;

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
    alignSelf: 'stretch',
  },
  logo : {
    marginTop: 150,
    height: 200,
    width: 200,
    resizeMode: "contain"
  },
  title : {
    marginTop: 60,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 150,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center'
  },
  button : {
    marginLeft: 25,
    marginRight: 25,
    display: 'stretch',
    alignSelf: 'stretch',
    overflow: 'hidden',
    borderRadius: 8
  }
})