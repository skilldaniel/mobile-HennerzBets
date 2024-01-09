import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView  } from 'react-native';
import Button from 'react-native-button';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/Entypo';
import { styles } from './TodayTipShow.style';

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

import bettingticket from '../../../assets/img/beting_ticket.png';

const FootballTeam = ["Hull", "CHELSEA", "KNICKS", "LAKERS"];
const sportsLabel = ["Football", "Basketball", "Horse Riding", "American Football"];

class TodayTipsShowScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSelectedDetail: 0
        }
    };
    render(){
        return(
            <View style={ styles.container } >
                {
                    this.state.isSelectedDetail === 1 ?
                    <View>
                        <View style={ styles.detailTipHeader }>
                            <Icon name="arrow-long-left" size={ 32 } color="white" style={{ marginLeft: 40 }}/>
                            <View style={ styles.detailTipRightHeader }>
                                {/* <Text style={ styles.detailTipName }>{ props.name }</Text>
                                <Image source={ props.avatarImage } style={{ marginRight: 4 }} />
                                <Image source={ props.sporsImage }/> */}
                                <Text style={ styles.detailTipName }>props.name</Text>
                                <Image source={ avatar1 } style={{ marginRight: 4 }} />
                                <Image source={ sport1 }/>
                            </View>
                        </View>
                        <Text style={ styles.detailTipDateTimeLabel }> props.dateTime </Text>
                        <Text style={ styles.detailTipTeamLabel }> props.team1 VS  props.team2 </Text>
                        <View style={ styles.detailTipNavButtonPane }>
                            <Button style={ styles.detailTipNavActiveButton }>Detail</Button>
                            <Button style={ styles.detailTipNavButton }>Betting slip</Button>
                        </View>
                        <View style={ styles.detailTipConstPane }>
                            <View style={ styles.detailTipoddPane }>
                                <Text style={ styles.detailTipoddLabel }>Odds</Text>
                                <Text style={ styles.detailTipoddValue }> props.oddValue </Text>
                            </View>
                            <View style={ styles.detailTipoddPane }>
                                <Text style={ styles.detailTipoddLabel }>Stake</Text>
                                <Text style={ styles.detailTipoddValue }>{ '\u00A3' } props.stakeValue </Text>
                            </View>
                        </View>
                        <View >
                            <Text style={ styles.detailTipReturnLabel }>Return       '\u00A3'   props.price </Text>
                        </View>
                        <View style={ styles.detailTipContent }>
                            <Text style={ styles.detailTipContentLabel }>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna magna, iaculis nec dapibus ac, eleifend eu nisl. Integer facilisis massa ex, vitae consectetur erat accumsan pulvinar. Vivamus pellentesque sodales turpis, rutrum tempor ipsum pretium sit amet. Nulla facilisi.
                            </Text>
                            <Text style={ styles.detailTipContentLabel }>
                                Cras magna magna, iaculis nec dapibus ac, eleifend eu nisl. Integer facilisis massa ex, vitae consectetur erat accumsan pulvinar. 
                            </Text>
                        </View>
                    </View> : null
                }
                {
                    this.state.isSelectedDetail === 0 ?
                    <View>
                        <View style={ styles.detailTipHeader }>
                            <Icon name="arrow-long-left" size={ 32 } color="white" style={{ marginLeft: 40 }}/>
                            <View style={ styles.detailTipRightHeader }>
                                {/* <Text style={ styles.detailTipName }>{ props.name }</Text>
                                <Image source={ props.avatarImage } style={{ marginRight: 4 }} />
                                <Image source={ props.sporsImage }/> */}
                                <Text style={ styles.detailTipName }>props.name</Text>
                                <Image source={ avatar1 } style={{ marginRight: 4 }} />
                                <Image source={ sport1 }/>
                            </View>
                        </View>
                        <Text style={ styles.detailTipDateTimeLabel }> props.dateTime </Text>
                        <Text style={ styles.detailTipTeamLabel }> props.team1 VS  props.team2 </Text>
                        <View style={ styles.detailTipNavButtonPane }>
                            <Button style={ styles.detailTipNavButton }>Detail</Button>
                            <Button style={ styles.detailTipNavActiveButton }>Betting slip</Button>
                        </View>
                        <View style={ styles.bettingticketPane }>
                            <Image source={ bettingticket } style={ styles.bettingticketImage }/>
                        </View>
                        <View style={ styles.betButton }>
                            <Text style={{ color: 'white', fontSize: 20 }}>Bet</Text><Text style={{ color: 'gold', fontSize: 20 }}>365</Text>
                        </View>
                    </View>:null
                }
            </View>
        );
    }
}

export default TodayTipsShowScreen;


