
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native';
import Button from 'react-native-button';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';

import Input from '../../Component/Input';
import InputWithIcon from '../../Component/InputWithIcon';

import avatar1 from '../../../assets/img/avatar/avatar1.png';
import avatar2 from '../../../assets/img/avatar/avatar2.png';
import avatar3 from '../../../assets/img/avatar/avatar3.png';
import avatar4 from '../../../assets/img/avatar/avatar4.png';
import sport1 from '../../../assets/img/avatar/sport1.png';
import sport2 from '../../../assets/img/avatar/sport2.png';
import sport3 from '../../../assets/img/avatar/sport3.png';
import sport4 from '../../../assets/img/avatar/sport4.png';

const sportsLabel = ["Football", "Basketball", "Horse Riding", "American Football"];

const TipComponent = (props) => {
    return(
    <View style={styles.tipPane}>
        <Image source={ props.avatar } style={styles.avatatImage}></Image>
        <View style={styles.componentBody}>
            <Text style={styles.nameStyle}>{ props.name }</Text>
            <Text style={styles.sportsStyle}>{ props.sports }</Text>
        </View>
        <TouchableOpacity></TouchableOpacity>
    </View>
    );
}
{/* <TipComponent avatar= { avatar4 } name="#Joybilly" sports={ sportsLabel[3] } /> */}

const TipComponentChange = (props) => {
    return(
        <View style={styles.tipPane}>
            <Image source={ props.avatar } style={styles.avatatImage}></Image>
            <View style={styles.componentBody}>
                <Text style={styles.nameStyle}>{ props.name }</Text>
            </View>
            <TouchableOpacity></TouchableOpacity>
        </View>
    );    
}

const SportComponent = (props) => {
    return(
        <View style={styles.tipPane}>
            <Image source={ props.avatar } style={styles.avatatImage}></Image>
            <View style={styles.componentBody}>
                <Text style={styles.nameStyle}>{ props.name }</Text>
            </View>
            <TouchableOpacity></TouchableOpacity>
        </View>
    );    
}

class SignupScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentStep: 0,
            searchFlag: 0,
            isChecked: false,
        }
    };
    render(){
        return (
            <View style={styles.container}>
                {/* body */}
                <View style={styles.body}>
                    {
                        this.state.currentStep ===  0?
                        <View>
                            <View>
                                <View style={styles.headerPad}>
                                    <Text style={styles.signupLabel}>Sign up</Text>
                                    <Button style={styles.signinButton}>Sign In</Button>
                                </View>
                                <View style={styles.commentPad}>
                                    <Text style={styles.commentLabel}>Sign up with your social media account or email address</Text>
                                </View>
                                <View style={styles.iconGroup}>
                                    <View style={styles.headerIcon}>
                                        <Icon name="facebook" size={ 40 } color="white"/>
                                    </View>
                                    <View style={styles.headerIcon}>
                                        <Icon name="twitter" size={ 40 } color="white"/>
                                    </View>
                                    <View style={styles.headerIcon}>
                                        <Icon name="instagram" size={ 40 } color="white"/>
                                    </View>
                                    <View style={styles.headerIcon}>
                                        <Icon name="google" size={ 40 } color="white"/>
                                    </View>
                                </View>
                                <View style={styles.ORContainer}>

                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
                                        <View style={styles.ORPane}>
                                            <Text style={styles.ORLabel}>OR</Text>
                                        </View>
                                        <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.bodyContent}>
                                <View>                            
                                    <Input 
                                        placeholder = "Email"
                                    />
                                    <InputWithIcon 
                                        placeholder = "Password"
                                    />
                                </View>
                                <View style={styles.policyPane}>
                                    <CheckBox
                                        style = { styles.policyCheck }
                                        onClick={()=>{
                                            this.setState({
                                                isChecked:!this.state.isChecked
                                            })
                                        }}
                                        isChecked={this.state.isChecked}
                                    />
                                    <Text style={styles.policyLabel}>I have read and agree to the Terms of use. Legal restrictions, Privacy Policy and. Terms of personal data. processing </Text>
                                </View>
                            </View>
                            <View style={ styles.footer }>
                                <View style={ styles.stepPane }>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                </View>
                                <View>
                                    <Button style={ styles.nextButton } onPress={this._goNext}>Next</Button>
                                </View>
                            </View>                            
                        </View> : null
                    }
                    {
                        this.state.currentStep === 1 ?
                        <View>
                            <View>
                                <View style={styles.headerPad}>
                                    <Text style={styles.signupLabel}>Sign up</Text>
                                </View>
                            </View>
                            <View style={ styles.bodyContent }>
                                <View>
                                    <Input 
                                        placeholder = "Name"
                                    />
                                    <Input 
                                        placeholder = "Mobile Number"
                                    />
                                    <Input 
                                        placeholder = "Age"
                                    />                                
                                </View>
                                <View style={styles.policyPane}>
                                    <CheckBox
                                        style = { styles.policyCheck }
                                        onClick={()=>{
                                            this.setState({
                                                isChecked:!this.state.isChecked
                                            })
                                        }}
                                        isChecked={this.state.isChecked}
                                    />
                                    <Text style={styles.policyLabel}>I agree that i am over 18 and abke to use this app. </Text>
                                </View>
                            </View>
                            <View style={ styles.footer }>
                                <View style={ styles.stepPane }>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                </View>
                                <View>
                                    <Button style={ styles.nextButton } onPress={this._goNext}>Next</Button>
                                </View>
                            </View>                            
                        </View> : null
                    }
                    {
                        this.state.currentStep === 2 ?
                        <View>
                            <View>
                                <View style={styles.headerPad}>
                                    <Text style={styles.signupLabel}>Sign up</Text>
                                </View>
                                <Text style={styles.whichtipst}>Which tipster has referred yet?</Text>
                                <Text style={styles.pleasenote}>Please note that selecting any more than one, may result in you being charged twice.</Text>
                            </View>
                            <View style={ styles.bodyContent }>
                                <View>
                                    {/* <View style={styles.searchFil} > */}
                                        {
                                            this.state.searchFlag === 0 ?
                                            <View style={styles.searchFil}>
                                                <View style={styles.buttonField}><Button style={styles.searchActiveButton}>Tipsters</Button></View>
                                                <View style={styles.buttonField}><Button style={styles.searchButton}>Sport</Button></View>
                                                <View style={styles.buttonField}><Button style={styles.searchButton}>Search</Button></View>
                                            </View> : null
                                        }
                                        {
                                            this.state.searchFlag === 1 ?
                                            <View style={styles.searchFil}>
                                                <View style={styles.buttonField}><Button style={styles.searchButton}>Tipsters</Button></View>
                                                <View style={styles.buttonField}><Button style={styles.searchActiveButton}>Sport</Button></View>
                                                <View style={styles.buttonField}><Button style={styles.searchButton}>Search</Button></View>
                                            </View> : null
                                        }
                                        {
                                            this.state.searchFlag === 2 ?
                                            <View style={styles.searchFil}>
                                                <View style={styles.buttonField}><Button style={styles.searchButton}>Tipsters</Button></View>
                                                <View style={styles.buttonField}><Button style={styles.searchButton}>Sport</Button></View>
                                                <View style={styles.buttonField}><Button style={styles.searchActiveButton}>Search</Button></View>
                                            </View> : null
                                        }
                                </View>
                                <View >
                                    {
                                        this.state.searchFlag === 0 ?
                                        <View style={styles.tipContainer}>
                                            <TipComponent avatar= { avatar1 } name="#ScoobyDoo" sports={ sportsLabel[0] } />
                                            <TipComponent avatar= { avatar2 } name="#thehotstepper" sports={ sportsLabel[1] } />
                                            <TipComponent avatar= { avatar3 } name="#Captainamerica" sports={ sportsLabel[2] } />
                                            <TipComponent avatar= { avatar4 } name="#Joybilly" sports={ sportsLabel[3] } />
                                        </View> :null
                                    }
                                    {
                                        this.state.searchFlag === 1 ?
                                        <View style={styles.tipContainer}>
                                            <SportComponent avatar= { sport1 } name={ sportsLabel[0] } />
                                            <SportComponent avatar= { sport2 } name={ sportsLabel[1] } />
                                            <SportComponent avatar= { sport3 } name={ sportsLabel[2] } />
                                            <SportComponent avatar= { sport4 } name={ sportsLabel[3] } />
                                        </View> :null
                                    }
                                </View>
                            </View>
                            <View style={ styles.footer }>
                                <View style={ styles.stepPane }>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                    <TouchableOpacity style={ styles.step }></TouchableOpacity>
                                </View>
                                <View>
                                    <Button style={ styles.nextButton } onPress={this._goNext}>Select tipster</Button>
                                </View>
                            </View>                            
                        </View> : null
                    }
                    {
                        this.state.currentStep === 3 ?
                        <View>
                            <View>
                                <View style={styles.headerPad}>
                                    <Text style={styles.signupLabel}>Sign up</Text>
                                </View>
                                <Text style={styles.whichtipst}>With the referred tipster</Text>
                            </View>
                            <View style={styles.tipContainer}>                            
                                <TipComponentChange avatar= {avatar1} name="#ScoobyDoo" />
                            </View>
                            <View style={styles.bodyContent}>
                                <View >
                                    <Text style={styles.bodyTitle}>Get on board for</Text>
                                </View>
                                <View style={styles.payPane}>
                                    <Text style={styles.payMethod}>Monthly Subscription</Text>
                                    <Text style={styles.payAmount}>{ '\u00A3' } 19.99</Text>
                                    <Text style={styles.payRate}>Just { '\u00A3' } 6.25 p/w</Text>
                                </View>
                            </View>

                            <View style={ styles.footer }>
                                <View style={ styles.stepPane }>
                                    <Text style={ styles.alertText }>By subscribing you accept our Terms and Conditions, Privacy Policy and Age & Identity Verification Policy.</Text>
                                    
                                </View>
                                <View>
                                    <Text style={ styles.payButton } onPress={this._goNext}>Pay with <Icon name="apple" size={ 22 } color="black" />Paypal</Text>
                                </View>
                            </View>
                            
                        </View> : null
                    }

                </View>
                {/* footer */}

            </View>
          );
    }

}
export default SignupScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        // backgroundColor: 'red',
        height: '100%',
    },
    headerPad: {
        left: 50,
        width: '100%',
        marginTop: 40,
        marginBottom: 8,
        flexDirection: 'row',
    },
    signupLabel: {
        width: 126,
        height:46,
        color: '#ffffff',
        fontFamily:'Lato',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 29,
    },
    signinButton:{
        width: 110,
        height:42,
        marginLeft: 160,
        paddingTop: 4,
        borderRadius: 10,
        backgroundColor: '#007a78',
        fontSize: 16,
        color: '#ffffff',
        alignItems: 'center',
    },
    commentPad: {
        alignItems: 'center',
        width: '60%',
        left: '20%',
        marginBottom: 8,
    },
    commentLabel: {
        height: 48,
        color: '#ffffff',
        fontFamily: 'Lato',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconGroup: {
        flexDirection: 'row',
        paddingLeft: '10%',
        marginBottom: 4,
    },
    headerIcon: {
        marginRight: 84,
    },
    bodyContent: {
        height: 280,
        // maxHeight: 280,
    },
    ORContainer: {
        alignItems: 'center',
        marginBottom: 12,
        width: '90%',
        left: '5%',
    },
    ORPane: {
        width: 40, 
        height:40,
        borderRadius:20,
        backgroundColor: '#484848',
    },
    ORLabel: {
        color:'white',
        padding: 8,
    },
    body: {
        width: '100%',
    },
    policyPane:{
        left: '10%',
        width: '80%',
        flexDirection: 'row',
    },
    policyCheck: {
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth:1,
        left:'10%',
        justifyContent: 'center',
    },
    policyLabel:{
        color: 'white',
        marginLeft: 10,
        width : 350,
        textAlign: 'center',
    },
    footer: {
        width: '100%',
    },
    stepPane: {
        flexDirection: 'row',
        left: '10%',
        width: '80%',
        marginTop: '30%',
        marginBottom: 20,
    },
    step: {
        backgroundColor: 'grey',
        borderWidth:1,
        borderColor:'black',
        borderRadius: 50,
        padding: 4,
        width: '10%',
        height: 40,
        marginLeft: '13%',
    },
    nextButton: {
        left: '10%',
        width: '80%',
        backgroundColor: '#c9c9c9',
        color: 'black',
        borderWidth:1,
        borderRadius: 30,
        fontFamily:'Lato',
        fontSize: 20,
        padding: 12,
    },
    whichtipst: {
        color: 'white',
        width: 297,
        height:24,
        fontFamily: 'Gotham-Book',
        fontSize: 16,
        fontWeight:'bold',
        lineHeight: 24,
        left: 50,
        marginBottom: 10,
    },
    pleasenote: {
        width:320,
        color:'white',
        fontFamily: 'Gotham-Book',
        fontSize:12,
        fontWeight: 'bold',
        lineHeight: 18,
        left: 50,
        marginBottom:20,
    },
    searchFil:{
        flexDirection: 'row',
        textAlign: 'center',
        width: '90%',
        left: 30,
        backgroundColor: 'grey',
        borderWidth:1,
        borderRadius: 35,
        // padding: 12,
        // paddingLeft: '5%',
        marginBottom: 20,
    },
    buttonField: {
        width: '33.3%',
    },
    searchButton:{
        color:'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        // width: 130,
        padding: 12,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    searchActiveButton:{
        color:'white',
        fontSize: 16,
        backgroundColor: '#007a78',
        // width: 130,
        padding: 12,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#007a78',
    },

    tipContainer:{
        width:'100%',
    },
    tipPane: {
        width: '90%',
        left: '10%',
        borderWidth:1,
        borderColor:'grey',
        borderRadius:20,
        flexDirection:'row',
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: '#484848',
        marginBottom: 10,
    },
    avatatImage: {
        marginRight: 20,
    },
    nameStyle: {
        color:'white',
    },
    sportsStyle: {
        color:'white',
    },
    tipTick: {
        backgroundColor: 'grey',
        borderWidth:1,
        borderColor:'white',
        borderRadius: 50,
        padding: 4,
        width: '10%',
        height: 40,
        marginLeft: '13%',
    },
    changeButton:{
        color: 'white',
    },
    bodyTitle: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Lato',
        fontWeight: 'bold',
        lineHeight: 26,
    },
    payPane: {
        backgroundColor: '#007a78',
        width: '90%',
        left: '5%',
        textAlign:'center',
        borderRadius: 12,
        padding: 12,
    },
    payMethod: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
    },
    payAmount: {
        width: '100%',
        textAlign: 'center',
        color: '#f5cb28',
        fontSize: 28,
        fontWeight: 'bold',
    },
    payRate: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    alertText: {
        color: 'white',
        width: '110%',
        textAlign: 'center',
    },
    payButton: {
        textAlign: 'center',
        left: '10%',
        width: '80%',
        backgroundColor: '#c9c9c9',
        color: 'black',
        borderWidth:1,
        borderRadius: 30,
        fontFamily:'Lato',
        fontSize: 20,
        padding: 12,
    },
});
