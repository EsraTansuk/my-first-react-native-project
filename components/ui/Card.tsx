

import React, {FC} from 'react'
import {Dimensions, View} from 'react-native'
import {StyleSheet} from 'react-native'
import { Colors } from '../../constants/Colors'

export interface CardProps {
  children?: React.ReactNode
}

export const Card: FC<CardProps> = ({children}) => {
  return <View style={styles.card}>{children}</View>
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})
