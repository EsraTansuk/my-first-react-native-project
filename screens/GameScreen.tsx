import { FC, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Card } from "../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";
import { InstructionText } from "../components/ui/InstructionText";
import { FlatList } from "react-native-gesture-handler";
import { GuessLogItem } from "../components/game/GuessLogItem";

export interface GameScreenProps {
  userNumber: number;
  onGameOver: () => void;
}

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: FC<GameScreenProps> = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  function nextGuessHandler(direction: "lower" | "greater") {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText} >Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound => <Text key={guessRound}>{guessRound}</Text>))} */}
        <FlatList
          data={guessRounds}
          renderItem={( itemData ) => <GuessLogItem roundNumber={guessRoundsLength - itemData.index} guess={itemData.index}  />}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  });
