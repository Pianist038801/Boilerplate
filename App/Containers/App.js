import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import {connect, Provider} from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import { Root } from 'native-base'
import { AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation';
// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentWillMount() {

    AsyncStorage.getItem('@irate-passcode', (err, result) => {
      this.setState({ loading: true }, () => {
        if (result) {
          const navigateAction = NavigationActions.navigate({
            routeName: 'mainStack',
            index: 0,
          });
          store.dispatch(navigateAction);
        }
      })
    });
  }

  render () {
    if (this.state.loading) {
      return (
        <Provider store={store}>
          <Root>
            <RootContainer />
          </Root>
        </Provider>
      )
    } else {
      return null
    }
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
