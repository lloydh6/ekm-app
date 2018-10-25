import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

class Home extends Component {
    updateHomeText = (e) => {
        this.props.updateHomeText(e)
    }

    render() {
        console.log(this);
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <TextInput 
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                value={this.props.home.DisplayText}
                onChangeText={this.updateHomeText}
            />
        </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
