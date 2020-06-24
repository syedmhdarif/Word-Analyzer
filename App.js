import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Style';

export default class App extends Component {

  constructor () {
    super ();
    this.state = {
      text: "",
      vowels: 0,
      consonant: 0,
      calculate: 0
    }
  }


  calculateAll = () => {
    let c = 0;
    let b = 0; 
    let text = this.state.text;

    for(let i = 0 ; i < text.length ; ++i){
      if ( text[i]=='a' || text[i]=='e' || text[i]=='i' || text[i]=='o' || text[i]=='u' ||
      text[i]=='A' || text[i]=='E' || text[i]=='I' || text[i]=='O' || text[i]=='U')
      {
        c++;
      }
      else
      {
        b++;
      }

      this.setState({vowels:c})
      this.setState({consonant:b});
    }

  }
  render(){
    return (
      <View style={Styles.container}>
        
        <Text style={Styles.welcome}>Word Analyzer</Text>
      
        <TextInput 
          multiline = {true}
          numberOfLines = {6}
          maxLength = {130}
          placeholder="type your text"
          onChangeText={(text) => this.setState({text})}
        />

        <View style={Styles.container}>

        <Button color="#841584" onPress={this.calculateAll} title='Analyze'/>
      <Text></Text>
      <Text style={Styles.instructions}>Word: {this.state.text.length}</Text>
      <Text style={Styles.instructions}>vowels: {this.state.vowels}</Text>
      <Text style={Styles.instructions}>Consonant: {this.state.consonant}</Text>
        </View>
        


        </View>
      
    );
  }
}

