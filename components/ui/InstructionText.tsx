
import { Colors } from '@/constants/Colors'
import React, { FC } from 'react'
import {StyleSheet, Text} from 'react-native'

export interface InstructionTextProps {
  children?: React.ReactNode
  style?: object

}

export const InstructionText:FC<InstructionTextProps> = ({children, style}) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
})
