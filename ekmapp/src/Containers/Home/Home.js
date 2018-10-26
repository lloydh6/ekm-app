import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class Home extends Component {
    updateHomeText = (e) => {
        this.props.updateHomeText(e)
    }

    render() {
      console.log(this.props);
      
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <TouchableOpacity 
              onPress={this.props.goToOrders}
              style={{  
                button: {
                alignItems: 'center',
                backgroundColor: '#DDDDDD',
                padding: 10
              }}}
            >
              <Text>Go to Orders</Text>
            </TouchableOpacity>
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
