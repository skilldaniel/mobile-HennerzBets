import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class InputWithIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: null,
            isVisible: true,
        }
    }

    render() {
        return (
            // <View style={ styles.inputContainer }>
            //     <TextInput 
            //         placeholder={this.props.placeholder}
            //         style={ styles.inputStyle }
            //     />
            //     <Icon name="eye" size={ 28 } color="red"/>
            // </View>
            <View style={styles.inputContainer}>

                <TextInput
                    style={ styles.inputStyle }
                    autoCorrect={false}
                    secureTextEntry
                    placeholder= {this.props.placeholder}
                />
                <Icon name='eye' color='black' size={ 24 } />
                    
                    {
                        this.props.isVisible === true ?
                            <Icon name='eye' color='black' size={20} />
                        : null
                    }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        marginBottom: 12,
        left: '20%',
        width: '90%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#979797',
        fontSize: 16,
        padding: 8,
        paddingLeft: 20,
        fontFamily: 'Lato',
    },
    inputStyle: {
        flex:1,
        color: '#278e8e',
    },

});
