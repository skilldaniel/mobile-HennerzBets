import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Button from 'react-native-button';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../TodayTips/TodayTip.style';

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

const FootballTeam = ["Hull", "CHELSEA", "KNICKS", "LAKERS"];
const sportsLabel = ["Football", "Basketball", "Horse Riding", "American Football"];

const TipCardComponent = (props) => {
    return(
    <ImageBackground source={ props.background } resizeMode="cover" style={ styles.tipcardPane } >
        <View style={ styles.tipcardHeader }>
            <Image source={ props.sporsImage } style={styles.avatatImage} />
            <Text style={styles.datatime}>{ props.datetime }</Text>
            <Text style={styles.nameLabel}>{ props.name }</Text>
            <Image source={ props.avatarImage } />
        </View>
        <Text style={styles.tipTitle}>{ props.team1 } VS { props.team2 }</Text>
        <View style={ styles.tipcardBody } >
            <View style={ styles.oddPane }>
                <Text style={styles.paneLabel}>Odds</Text>
                <Text style={styles.paneValue}>{ props.odds }</Text>
            </View>
            <View style={ styles.oddPane }>
                <Text style={styles.paneLabel}>Stake</Text>
                <Text style={styles.paneValue}>{ '\u00A3' }{ props.stakePrice }</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 2, backgroundColor: '#9bffb5'}} />
        </View>
        <View style={ styles.tipcardFooter }>
            <Text style={styles.returnLabel}>Return </Text>
            <Text style={styles.footerLabel}>{ '\u00A3' }{ props.returnPrice }</Text>
        </View>
    </ImageBackground>
    );
}

class FutureTipScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSelectedallButton: 1,
        }
    };
    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.isSelectedallButton === 1 ?
                    <View>
                        <View>
                            <Text style={styles.titleLabel}>Future tips</Text>
                        </View>
                        <View style={styles.headerContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <Button style={styles.headerActiveButton}>All</Button>
                                <Button style={styles.headerButton}>Refine</Button>                            
                            </View>
                        </View>
                        <ScrollView style={styles.notificationContainer}>
                            <View style={styles.notificationHeader}>
                                <Text style={styles.winnerLabel}>WINNER</Text>
                                <Text style={styles.winnergoldLabel}>WINNER</Text>
                                <Text style={styles.winnerLabel}>WINNER</Text>
                                <Text style={styles.winnergoldLabel}>WINNER</Text>
                            </View>
                            <View>
                                <TipCardComponent background={ back2 } sporsImage={sport1} datetime="14/21/21 | 17/30" name="#scpobydoo" avatarImage={ avatar1 } team1={ FootballTeam[0] } team2={ FootballTeam[1] } odds="1.72" stakePrice="150.00" returnPrice="431.81" />
                                <TipCardComponent background={ back2 } sporsImage={sport1} datetime="14/21/21 | 17/30" name="#thehotstepper" avatarImage={ avatar1 } team1={ FootballTeam[2] } team2={ FootballTeam[3] } odds="1.72" stakePrice="150.00" returnPrice="431.81" />
                            </View>
                        </ScrollView>
                    </View>: null
                }
                {
                    this.state.isSelectedallButton ===0 ?
                    <View>
                        <Image source={ headerImage } style={ styles.refineheaderImage } />
                        <View style={ styles.refineContainer }>
                            <View style={ styles.refineHeader }>
                                <View style={ styles.crossPane }>
                                    <Icon name="cross" size={32} color="black" />
                                </View>
                            </View>
                            <View>
                                {
                                    this.state.isSelectedtipButton === 0 ?
                                    <View style={ styles.refineBody }>
                                        <View style={ styles.refineNavPane }>
                                            <Button style={ styles.refineNavActiveButton }>Tipster</Button>
                                            <Button style={ styles.refineNavButton }>Sport</Button>
                                            <Button style={ styles.refineNavButton }>Odds</Button>
                                        </View>
                                        <ScrollView style={ styles.refinePane }>
                                            <TipsterComponent avatar={ avatar1 } name="#ScoobyDoo" sportsName={ sportsLabel[0] } />
                                            <TipsterComponent avatar={ avatar2 } name="#ScoobyDoo" sportsName={ sportsLabel[0] } />
                                            <TipsterComponent avatar={ avatar3 } name="#ScoobyDoo" sportsName={ sportsLabel[0] } />
                                            <TipsterComponent avatar={ avatar4 } name="#ScoobyDoo" sportsName={ sportsLabel[0] } />
                                        </ScrollView>
                                        <View style={ styles.refineFooter }>
                                            
                                        </View>
                                    </View> : null
                                }
                                {
                                    this.state.isSelectedtipButton === 1 ?
                                    <View style={ styles.refineBody }>
                                        <View style={ styles.refineNavPane }>
                                            <Button style={ styles.refineNavButton }>Tipster</Button>
                                            <Button style={ styles.refineNavActiveButton }>Sport</Button>
                                            <Button style={ styles.refineNavButton }>Odds</Button>
                                        </View>
                                        <ScrollView style={ styles.refinePane }>
                                            <SportComponent avatar={ sport1 } sportsName={ sportsLabel[0] } />
                                            <SportComponent avatar={ sport2 } sportsName={ sportsLabel[1] } />
                                            <SportComponent avatar={ sport3 } sportsName={ sportsLabel[2] }/>
                                            <SportComponent avatar={ sport4 } sportsName={ sportsLabel[3] }/>
                                        </ScrollView>
                                        <View style={ styles.refineFooter }>
                                            
                                        </View>
                                    </View> : null
                                }
                                {
                                    this.state.isSelectedtipButton === 2 ?
                                    <View style={ styles.refineBody }>
                                        <View style={ styles.refineNavPane }>
                                            <Button style={ styles.refineNavButton }>Tipster</Button>
                                            <Button style={ styles.refineNavButton }>Sport</Button>
                                            <Button style={ styles.refineNavActiveButton }>Odds</Button>
                                        </View>
                                        <ScrollView style={ styles.refinePane }>
                                            <OddComponent type="Highest to lowest" />
                                            <OddComponent type="Lowest to Highest" />
                                        </ScrollView>
                                        <View style={ styles.refineFooter }>
                                            
                                        </View>
                                    </View> : null
                                }

                            </View>
                        </View>
                    </View> : null
                }
            </View>
        );
    }
}

export default FutureTipScreen;

