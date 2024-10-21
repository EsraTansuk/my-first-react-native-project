

import React, { FC } from 'react'
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'
import { Colors } from '../../constants/Colors'

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
      fontFamily: 'open-sans-bold',
      fontSize: 18,
      // fontWeight: 'bold',
      color: 'lightgrey',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: 'lightgrey',
      padding: 12,
      maxWidth: '80%',
      width: 300,
    }
  })
