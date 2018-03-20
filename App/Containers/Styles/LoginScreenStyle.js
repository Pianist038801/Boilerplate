import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    justifyContent: 'center',
    flex: 1,
    padding: Metrics.baseMargin
  },
  inputContainer: {
    backgroundColor: Colors.snow,
  },
  inputStyle: {
    fontWeight: 'bold',
  },
  logoContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 30,
    height:204,
    width: 180,
  },
  logo: {
    height:204,
    width:180,
  }
})
