import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images, Colors, Metrics } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

type LoginScreenProps = {
  dispatch: () => any,
  fetching: boolean,
  attemptLogin: () => void,
  passcode: number,
  error: string
}

class LoginScreen extends Component {

  props: LoginScreenProps

  state: {
    passcode: number,
    loading: boolean,
    error: string,
    editable: boolean
  }

  isAttempting: boolean

  constructor (props: LoginScreenProps) {

    super(props)

    this.state = {
      passcode : '',
      loading: false,
      error: '',
      editable: true
    },

    this.isAttempting = false

  }

  componentWillReceiveProps(nextProps) {
    this.forceUpdate();

    if(this.isAttempting && !nextProps.fetching){
      if(!nextProps.error){
        this.props.navigation.navigate('TeamScreen');
      }else{
        this.setState({ loading: false, passcode: '', editable: true}, () => {
          Toast.show({
            text: nextProps.error,
            position: 'bottom',
            buttonText: 'Okay',
            type: 'warning',
            duration: 5000
          })
        })
      }
    }
  }

  handleChangePasscode = value => this.setState({ passcode: value });

  handleLogin = () => {

    if(this.state.passcode.length < 4 || this.state.passcode === ''){
      Toast.show({
        text: 'Enter valid passcode',
        position: 'bottom',
        buttonText: 'Okay',
        type: 'danger',
        duration: 5000
      });
    }else{
      this.setState({ loading: true , editable: false}, () => {
        this.isAttempting = true;
        this.props.attemptLogin(this.state.passcode);
      })
    }
  }

  render () {
    return (
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.backgroundImageContainer}>
            <Image source={Images.background} style={styles.backgroundImage}/>
          </View>

          
          <Form>
            <Item regular style={styles.inputContainer}>
              <Input placeholder={'Enter Passcode'.toUpperCase()}
                     style={styles.inputStyle}
                     ref='passcode'
                     autoFocus={false}
                     value={this.state.passcode}
                     textAlign={'center'}
                     placeholderTextColor={Colors.coal}
                     keyboardType='numeric'
                     returnKeyType='go'
                     editable={this.state.editable}
                     autoCapitalize='none'
                     autoCorrect={false}
                     onChangeText={this.handleChangePasscode}
                     underlineColorAndroid='transparent'
                     onSubmitEditing={() => this.handleLogin}
              />
            </Item>
          </Form>
          {this.state.loading ? <Spinner color={Colors.navy}/> : null}
          <FullButton
            text='login'
            style={{
              backgroundColor: Colors.snow,
              position: 'absolute',
              bottom: Metrics.baseMargin,
              marginHorizontal: Metrics.baseMargin,
              alignItems: 'center',
              width: Metrics.screenWidth - 20,
              borderRadius: 0,
              height: Metrics.baseMargin * 5,
            }}
            textStyle={{
              color: Colors.navy,
            }}
            onPress={this.handleLogin}
          />
        </View>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching:state.auth.fetching,
    error:state.auth.error,
    passcode:state.auth.passcode,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (passcode) => dispatch(AuthActions.authRequest(passcode)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
