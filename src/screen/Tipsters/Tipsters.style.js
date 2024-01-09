import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        // backgroundColor: 'black',
        height: '100%',
        width: '100%',
    },
    titleLabel: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        marginTop: 20,
    },
    headerPane: {
        flexDirection: 'row',
        backgroundColor:'grey',
        marginBottom: 24,
        width: '80%',
        left: '10%',
        borderRadius: 20,
    },
    headerButton: {
        width: 128,
        borderColor: 'transparent',
        borderWidth: 2,
        fontSize: 20,
        padding: 8,
        borderRadius: 20,
        color: 'white',
    },
    headerActiveButton: {
        width: 128,
        borderColor: '#007a78',
        borderWidth: 2,
        fontSize: 20,
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#007a78',
        color: 'white',
    },    
    body: {
        left: '5%',
    },
// TipsterComponent start
    tipsterContainer: {
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 16,
        width: '90%',
        marginBottom: 16,
        padding: 8,
        backgroundColor: 'grey',
    },  
    avatarImage: {

    },
    tipsterName: {
        width: '70%',
        marginLeft: 12,
        color: 'white',
        fontSize: 16,
        paddingTop: 6,
    },
    addButton: {
        color: 'white',
        backgroundColor: '#007a78',
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 16,
    }
// TipsterComponent end
})
