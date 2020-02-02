import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stateN : false
    }
  }

  onPressButton = () =>{
    this.setState({
      stateN : !this.state.stateN
    }) 
  }

  render(){
    var text = this.state.stateN
    var con = text ? 'Yes':'No'
    return (
      <View style={styles.container}>
        <View style = {styles.textView}> 
          <Text style = {styles.text}> UPCC WORKSHOP I</Text>
    <Text style = {styles.text}> {con} </Text>
        </View>
        <View style = {styles.pressButtView}>
          <Button title = 'press me' onPress = {this.onPressButton.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    flex: 0.7,
    alignContent: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize:20
  },

  pressButtView: {
    flex: 0.3,
    alignContent: 'center',
    justifyContent: 'center',
  }
});
