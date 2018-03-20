import { StackNavigator } from 'react-navigation'
import TeamScreen from '../Containers/TeamScreen'
import LoginScreen from '../Containers/LoginScreen'

const LoginStack = StackNavigator({
  LoginScreen: { screen: LoginScreen },
}, {
  headerMode: 'none',
});

const MainStack = StackNavigator({
  TeamScreen: { screen: TeamScreen },
}, {
  headerMode: 'none',
});

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  mainStack: { screen: MainStack },
  loginStack: { screen: LoginStack },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'loginStack'
})

export default PrimaryNav
