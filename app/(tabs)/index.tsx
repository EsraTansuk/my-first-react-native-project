import { Image, StyleSheet, Platform, View, ImageBackground, SafeAreaView } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import StartGameScreen from "../../screens/StartGameScreen";
import GameOverScreen from "../../screens/GameOverScreen";
import GameScreen from "../../screens/GameScreen";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export interface HomeScreenProps {
  pickedNumber: number
}

export const HomeScreen: FC<HomeScreenProps> = ({pickedNumber}) => {
  const [userNumber, setUserNumber] = useState<number>()
  const [gameIsOver, setGameIsOver] = useState<boolean>(true)

  const [fontsLoaded] = useFonts(
    {
      'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
    }
  )

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);


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
