import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView  } from 'react-native';
import { Checkbox } from 'pretty-checkbox-react';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './Setting.style';

const SettingComponent = (props) => {
    return(
    <TouchableOpacity style={styles.SettingComponentPane}>
        <Icon name={ props.iconName } size={ 24 } color="white" style={ styles.SettingComponentIcon }/>
        <View style={ styles.SettingComponentFunctionPane }>
            <Text style={ styles.SettingComponentFunctionName }>{ props.functionName }</Text>
            <Text style={ styles.SettingComponentFunctionSet }>{ props.functionSet }</Text>
        </View>
    </TouchableOpacity>
    );
}

class SettingScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    };
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.titleLabel}>Settings</Text>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.machineOwner}>John Smith</Text>
                    <Text style={styles.machineID}>Member ID: 123456789</Text>
                </View>
                <View style={styles.SettingContainer}>
                    <SettingComponent iconName="notifications" functionName="Notifications" />
                    <SettingComponent iconName="finger-print" functionName="Touch ID" />
                    <SettingComponent iconName="comment" functionName="Face ID" />
                    <SettingComponent iconName="card" functionName="Plans" />
                    <SettingComponent  iconName="comment" functionName="Cancel Subscription" />
                    <SettingComponent iconName="comment" functionName="Help & Support" />
                    <SettingComponent iconName="pencil" functionName="Give Feedback" />
                    <SettingComponent functionName="Terms and Condition" />
                    <SettingComponent functionName="Privacy Policy" />
                </View>
            </View>
        );
    }
}

export default SettingScreen;



