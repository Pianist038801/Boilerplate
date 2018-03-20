import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    backgroundColor: Colors.navy,
  },
  buttonText: {
    margin: 18,
    lineHeight: 0,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.bold
  }
})
