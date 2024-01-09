import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export default class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: null
        }
    }

    render() {
        return (
            <View>
                <TextInput 
                    placeholder={this.props.placeholder}
                    style={ styles.inputStyle }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: 'white',
        marginBottom: 12,
        left: '5%',
        width: '90%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#979797',
        fontSize: 16,
        padding: 8,
        paddingLeft: 20,
        fontFamily: 'Lato',
        color: '#278e8e',
    },
});
