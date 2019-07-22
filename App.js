import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    View,
    Button,

    TouchableOpacity
} from 'react-native';
import bgImage from './assets/art-artist-audience-2167172.jpg'
const Dimensions = require('Dimensions');
const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            showPass:true,
            press: false,

        }
    }
    showPass = () => {
        if (this.state.press == false) {
            this.setState({showPass: false, press:true})
        } else{
            this.setState({showPass:true,Press: false})
        }
            
    }
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                  <View style={styles.inputContainer}>
                      <Icon name = {'ios-person-outline'} size={28} color={'#7FFF00'}
                           style={styles.inputIcon}/>
                      <TextInput
                        style={styles.input} 
                        placeholder={'Username'}
                        placeholderTextColor={'#FF8C00'} 
                        underlineColorAndroid='transparent'
                       />  
                  </View>

                  <View style={styles.inputContainer}>
                      <Icon name={'ios-lock-outline'} size={28} color={'#7FFF00'}
                            style={styles.inputIcon} />
                      <TextInput
                            style={styles.input}
                            placeholder={'Password'}
                            secureTextEntry={this.state.showPass}
                            placeholderTextColor={'#FF8C00'}
                            underlineColorAndroid={'transparent'}
                        />

                        <TouchableOpacity style={styles.btnEye}
                                onPress={this.showPass.bind(this)}>
                            <Icon name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'} size={26} color={'blue'}/>
                        </TouchableOpacity>

                  </View>
                  <TouchableOpacity style={styles.btnLogin}>
                      <Text style={styles.text} >Login</Text>
                  </TouchableOpacity>
                  
                  </ImageBackground>

            )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        width: null,
        height: null,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F5FCFF',
    },
    inputContainer: {
        marginTop: 10,
    },
    input: {
        width: WIDTH - 55,
        height:45,
        borderRadius:25,
        fontSize:16,
        paddingLeft:45,
        backgroundColor:'white',
        color:'black',
        marginHorizontal: 25,
    },
    inputIcon: {
        position: 'absolute',
        top:8,
        left:37,
    },
    btnEye: {
        position:'absolute',
        top:8,
        right:37,
    },
    btnLogin:{
        width: WIDTH - 55,
        height: 45,
        borderRadius:25,
        backgroundColor: 'blue',
        justifyContent: 'center',
        marginTop:20,
    },
    text:{
        color:'black',
        fontSize:16,
        textAlign:'center',
    }

})
