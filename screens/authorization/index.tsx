import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  ImageBackground,
  Alert,
} from "react-native";

import { styles } from '../../styles';
import background_pic from '../../assets/background.jpg';

interface IAuthorizationScreenState {
  login: string,
  password: string
}

export class AuthorizationScreen extends Component<any, IAuthorizationScreenState> {

  constructor(props: any) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }

  render() {
    
    const { login, password } = this.state;
    const isEmpty = !login.length || !password.length;

    return (
      <ImageBackground source={background_pic} style={{width: '100%', height: '100%'}}>
        <View style={[styles.flex, styles.flexCenter, styles.flexColumn]}>
          <View>
            <Text style={styles.label}>Login</Text>
            <TextInput
              onChangeText={(value) => this.setState({login: value})}
              style={styles.input}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              onChangeText={(value) => this.setState({password: value})}
              style={styles.input}
              secureTextEntry
            />
          </View>
          <View style={[styles.button, isEmpty ? styles.buttonDisabled : null]}>
            <Button
              title='LOG IN'
              onPress={() => Alert.alert('Log in!')}
              color='#FFFFFF'
              disabled={isEmpty ? true : false}
            />
          </View>
        </View>
      </ImageBackground>
    )
  }
}