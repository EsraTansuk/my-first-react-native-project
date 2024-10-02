
import { Colors } from '@/constants/Colors'
import React, { FC } from 'react'
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'

export interface TitleProps {
    children?: React.ReactNode
    style?: StyleProp<TextStyle>

}

 const Title:FC<TitleProps> = ({children, style}) => {

  return (
    <Text style={style ?? styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.accent500,
      textAlign: 'center',
      borderWidth: 2,
      borderColor: Colors.accent500,
      padding: 12,
    }
  })
