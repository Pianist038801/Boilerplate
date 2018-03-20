import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/FullButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Button, Text } from 'native-base'

// Note that this file (App/Components/FullButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Full Button', () =>
  <FullButton
    text='Hey there'
    onPress={() => window.alert('Full Button Pressed!')}
  />
)

export default class FullButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
    textStyle: PropTypes.object
  }

  render () {
    return (
      /*<TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text && this.props.text.toUpperCase()}</Text>
      </TouchableOpacity>*/
      <Button block style={[styles.button, this.props.style]} onPress={this.props.onPress}>
        <Text style={[styles.buttonText, this.props.textStyle]}>{this.props.text && this.props.text.toUpperCase()}</Text>
      </Button>
    )
  }
}
