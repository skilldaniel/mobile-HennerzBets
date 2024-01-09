import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView  } from 'react-native';
import Button from 'react-native-button';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Tipsters.style';

// import Input from '../../component/Input';
// import InputWithIcon from '../../component/InputWithIcon';
import avatar1 from '../../../assets/img/avatar/avatar1.png';
import avatar2 from '../../../assets/img/avatar/avatar2.png';
import avatar3 from '../../../assets/img/avatar/avatar3.png';
import avatar4 from '../../../assets/img/avatar/avatar4.png';
import sport1 from '../../../assets/img/avatar/sport1.png';
import sport2 from '../../../assets/img/avatar/sport2.png';
import sport3 from '../../../assets/img/avatar/sport3.png';
import sport4 from '../../../assets/img/avatar/sport4.png';

import back1 from '../../../assets/img/componentBack/1.png';
import back2 from  '../../../assets/img/componentBack/2.png';

import headerImage from '../../../assets/img/todayTipHeader.png';

const TipsterComponent = (props) => {
    return(
        <View style={ styles.tipsterContainer }>
            <Image source={ props.avatar } style={ styles.avatarImage }/>
            <Text style={ styles.tipsterName }>{ props.name }</Text>
            <Button style={ styles.addButton }>Add</Button>
        </View>
    )
}

class TipstersScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedButton: 0,
        }
    };
    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.selectedButton === 0? 
                    <View>
                        <View>
                            <Text style={styles.titleLabel}>Tipsters</Text>
                        </View>
                        <View style={styles.headerPane}>
                            <Button style={styles.headerActiveButton} >All</Button>
                            <Button style={styles.headerButton} >Sport</Button>
                            <Button style={styles.headerButton} >Search</Button>
                        </View>
                        <ScrollView style={styles.body}>
                            <TipsterComponent avatar={ avatar1 } name="#ScoobyDoo" />
                            <TipsterComponent avatar={ avatar2 } name="#thehotstepper" />
                            <TipsterComponent avatar={ avatar3 } name="#Captainamerica" />
                            <TipsterComponent avatar={ avatar4 } name="#Joybilly" />
                        </ScrollView>                        
                    </View> : null
                }
                {
                    this.state.selectedButton === 1? 
                    <View>
                        <View>
                            <Text style={styles.titleLabel}>Tipsters</Text>
                        </View>
                        <View style={styles.headerPane}>
                            <Button style={styles.headerButton} >All</Button>
                            <Button style={styles.headerActiveButton} >Sport</Button>
                            <Button style={styles.headerButton} >Search</Button>
                        </View>
                        <ScrollView style={styles.body}>
                            <TipsterComponent avatar={ avatar1 } name="#ScoobyDoo" />
                            <TipsterComponent avatar={ avatar2 } name="#thehotstepper" />
                            <TipsterComponent avatar={ avatar3 } name="#Captainamerica" />
                            <TipsterComponent avatar={ avatar4 } name="#Joybilly" />
                        </ScrollView>                        
                    </View> : null
                }
                {
                    this.state.selectedButton === 2? 
                    <View>
                        <View>
                            <Text style={styles.titleLabel}>Tipsters</Text>
                        </View>
                        <View style={styles.headerPane}>
                            <Button style={styles.headerButton} >All</Button>
                            <Button style={styles.headerButton} >Sport</Button>
                            <Button style={styles.headerActiveButton} >Search</Button>
                        </View>
                        <ScrollView style={styles.body}>
                            <TipsterComponent avatar={ avatar1 } name="#ScoobyDoo" />
                            <TipsterComponent avatar={ avatar2 } name="#thehotstepper" />
                            <TipsterComponent avatar={ avatar3 } name="#Captainamerica" />
                            <TipsterComponent avatar={ avatar4 } name="#Joybilly" />
                        </ScrollView>                        
                    </View> : null
                }                
            </View>
        );
    }
}

export default TipstersScreen;


