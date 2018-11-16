import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../Styles/Styles';

class FormRowHeader extends Component {
    render() {
        return (
            <TouchableOpacity
                disabled
                style={styles.fullWidthSectionHeader}
            >
                <Text>{this.props.displayText}</Text>
            </TouchableOpacity>
        )
    }
}

export default FormRowHeader;