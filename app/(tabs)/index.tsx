import { Image, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import StartGameScreen from "../../screens/StartGameScreen";
import GameOverScreen from "../../screens/GameOverScreen";
import GameScreen from "../../screens/GameScreen";
import * as SplashScreen from 'expo-splash-screen';
import { Colors } from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

SplashScreen.preventAutoHideAsync();

export interface HomeScreenProps {
  pickedNumber: number
}

export const HomeScreen: FC<HomeScreenProps> = ({pickedNumber}) => {
  const [userNumber, setUserNumber] = useState<number | null>(null)
  const [gameIsOver, setGameIsOver] = useState<boolean>(true)
  const [guessRounds, setGuessRounds] = useState<number>(0)

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

  function startNewGameHandler() {
    setGuessRounds(0);
    setUserNumber(null); 
    setGameIsOver(true); 
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber && !gameIsOver) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler} 
      />
    );
  }

  
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('../../assets/images/background-img.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
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
