import { Image, StyleSheet, Platform, View, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "@/screens/StartGameScreen";
import React, { FC, useState } from "react";
import GameScreen from "@/screens/GameScreen";
import GameOverScreen from "@/screens/GameOverScreen";
import { Colors } from "@/constants/Colors";
import LinearGradient from "react-native-linear-gradient";

export interface AppProps {
  pickedNumber: number
}

export const HomeScreen: FC<AppProps> = ({pickedNumber}) => {
  const [userNumber, setUserNumber] = useState<number>()
  const [gameIsOver, setGameIsOver] = useState<boolean>(true)

  function pickedNumberHandler(pickedNumber: number) { 
    setUserNumber(pickedNumber) 
    setGameIsOver(false)
  }

  
  function gameOverHandler() {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver= {gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen  />
  }


  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require('../../assets/images/background-img.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})

export default HomeScreen
