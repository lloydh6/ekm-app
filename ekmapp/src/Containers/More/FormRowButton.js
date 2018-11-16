import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text,
    Linking
} from 'react-native'
import Styles from '../../Styles/Styles';

class FormRow extends Component {
    render () {
        return(
            <TouchableHighlight 
                style={Styles.fullWidthButton}
                onPress={() => {
                    Linking.openURL(this.props.url)
                }}
            >
                <Text style={{
                    textAlign: "center",
                    flex: 1
                }}>
                    {this.props.displayText}
                </Text>
            </TouchableHighlight>
        )
    }
}

export default FormRow;