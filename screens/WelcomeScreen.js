import * as React from 'react';
import { View, Image, StyleSheet, Text, Button, Pressable } from 'react-native';

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
        <Pressable onPress={ () => navigation.navigate("Subscribe") }>
          <Text style={styles.button}>Newsletter</Text>
        </Pressable>
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
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: "#044004",
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