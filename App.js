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
    text: <Text></Text>,
  }

  onPress = () => {
    let local_show_text = !this.state.show_text
    let local_text;
    if (local_show_text) {
      local_text = <Text> Hello World! </Text>
    } else {
      local_text = <Text></Text>
    }
    this.setState({text: local_text, show_text: local_show_text});
  }

  render() {
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