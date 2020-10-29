import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

class App extends Component {

  state = {
    show_text: false,
    text: <Text>  </Text>,
  }

  onPress = () => {
    this.setState({show_text: !this.state.show_text});
    if (this.state.show_text) {
      this.setState({text: <Text> Hello World! </Text>})
    } else {
      this.setState({text: <Text>  </Text>})
    }
    console.log(this.state.show_text + " \n " + this.state.text);
  }

  render() {
    let text;
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Click on me for a nice message!</Text>
        </TouchableOpacity>
        <View>
          {this.state.text}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7cadfc',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffd1f8',
    padding: 10,
    marginBottom: 10
  }
})

export default App;