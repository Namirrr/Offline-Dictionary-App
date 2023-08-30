import dictionary from '../database'
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      definition: '',
      phonetics: '',
    };
  }
   getWord = (text) => {
    var text = text.toLowerCase();
    try {
      var word = dictionary[text]['word'];
      var lexicalCategory = dictionary[text]['lexicalCategory'];
      var definition = dictionary[text]['definition'];
      this.setState({
        word: word,
        lexicalCategory: lexicalCategory,
        definition: definition,
      });
    } catch (err) {
      alert('This word is not avaiable');
      this.setState({
        text: '',
        isSearchPressed: false,
      });
    }
  };

  render() {
    return (
      <View>
        <Header
          backgroundColor={'coral'}
          centerComponent={{
            text: 'Online Dictionary',

            style: {
              fontSize: 21,
            },
          }}
        />

        <TextInput
          style={styles.searchBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchedPressed: false,
              word: 'Loading...',
              lexicalCategory: '',
              examples: [],
              definition: '',
            });
          }}
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isSearchedPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.text1}> Search </Text>
        </TouchableOpacity>

        <Text style={styles.text}>{this.state.word}</Text>
        <Text style={styles.text}>{this.state.definition}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 45,
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 3,
    borderColor: 'black',
    outline: 'none',
    backgroundColor: 'white',
  },
  searchButton: {
    width: '50%',
    height: 50,
    alignSelf: 'center',
    padding: 5,
    margin: 80,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'black',
    backgroundColor: 'coral',
  },
  text1: {
    textAlign: 'center',
    fontSize: 25,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
  },
});
