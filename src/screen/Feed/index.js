import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView  } from 'react-native';
import Button from 'react-native-button';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Input from '../../component/Input';
// import InputWithIcon from '../../component/InputWithIcon';

const NotificationComponent = (props) => {
    return(
    <View style={styles.notificationPane}>
        <Icon name="comment" size={ 28 } color="#007a78" />
        <Text style={ styles.notificationDate }>{ props.date }</Text>
        <Text style={ styles.notificationTime }>{ props.time }</Text>
        <Icon name="angle-up" size={ 28 } color="black" />
    </View>
    );
}

class FeedScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    };
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.titleLabel}>The Feed</Text>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={ styles.headerLabel }>Join the community</Text>
                    <View style= { styles.headerIconGroup }>
                        <Icon name="instagram" size={ 44 } color="white" style={ styles.headerIcon }/>
                        <Icon name="twitter" size={ 44 } color="white" style={ styles.headerIcon }/>
                    </View>
                </View>
                <ScrollView style={styles.notificationContainer}>
                    <NotificationComponent date="Friday 14th December | " time="12:30"  />
                    <NotificationComponent date="Friday 14th December | " time="12:30"  />
                    <NotificationComponent date="Friday 14th December | " time="12:30"  />
                    <NotificationComponent date="Friday 14th December | " time="12:30"  />
                    <NotificationComponent date="Friday 14th December | " time="12:30"  />
                    <NotificationComponent date="Friday 14th December | " time="12:30"  />
                    <NotificationComponent date="Friday 14th December | " time="12:30"  />
                    <NotificationComponent date="Friday 14th December | " time="12:30"  />
                    <NotificationComponent date="Friday 14th December | " time="12:30"  />
                    <NotificationComponent date="Friday 14th December | " time="12:30"  />
                    <NotificationComponent date="Friday 14th December | " time="12:30"  />
                </ScrollView>
                <View>
                    <Button style={ styles.clearButton }>Clear all</Button>
                </View>
            </View>
        );
    }
}

export default FeedScreen;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        backgroundColor: 'black',
        height: '100%',
    },
    titleLabel: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 16,
    },
    headerContainer:{
        flexDirection: 'row',
        borderWidth:1,
        borderColor: '#007a78',
        borderRadius: 8,
        left: '4%',
        width: '84%',
        paddingLeft: 12,
        marginBottom: 20,
    },
    headerLabel: {
        color: 'white',
        fontSize: 20,
        marginTop:16,
        marginBottom: 16,
    },
    headerIconGroup: {
        marginLeft: 72,
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8,
    },
    headerIcon: {
        marginRight: 16,
    },
    notificationContainer : {
        left: '7%',
        width: '84%',
        maxHeight: 200,
    },
    notificationPane: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding:12,
        borderRadius: 8,
        marginBottom: 20,
    },
    notificationDate: {
        fontSize: 18,
        paddingLeft: 8,
    },
    notificationTime: {
        fontSize: 18,
        paddingRight: 40,
    },
    clearButton: {
        color: 'white',
        // backgroundColor: 'red',
        width: 100,
    },
});
