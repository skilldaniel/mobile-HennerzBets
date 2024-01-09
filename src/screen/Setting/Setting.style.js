import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        backgroundColor: 'black',
        height: '100%',
    },
    titleLabel: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 32,
    },
    headerContainer: {
        backgroundColor: 'grey',
        width: '80%',
        left: '10%',
        marginTop: 20,
        textAlign: 'center',
        borderRadius: 16,
    },
    machineOwner: {
        width: '100%',
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
        marginTop: 12,
    },
    machineID: {
        width: '100%',
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginBottom: 12,
    },
    SettingContainer: {
        left: '4%',
        width: '85%',
        marginTop: 32,
    },
// SettingComponent start
SettingComponentPane: {
    flexDirection: 'row',
    marginBottom: 8,
},
SettingComponentIcon:{
    width: 36,
},
SettingComponentFunctionPane: {
    flexDirection: 'row', 
    borderBottomWidth: 1, 
    borderBottomColor: 'grey',
    width: '95%',
    paddingBottom: 8,
},
SettingComponentFunctionName: {
    marginLeft: 12,
    color: 'white',
    fontSize: 18,
    width: 360,
},
SettingComponentFunctionSet: {
    
},
// SettingComponent end

});
