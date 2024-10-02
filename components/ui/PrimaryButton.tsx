
import { Colors } from '@/constants/Colors';
import {FC} from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'

export interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({children, onPress}) => {
  function pressHandler() {
    onPress()
    console.log('Button pressed')
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: Colors.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    marginVertical: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 2,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
})
