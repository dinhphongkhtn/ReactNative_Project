

import { StyleSheet } from "react-native";
export  const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    background: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',

    },
    container: {
        flex: 1
    },
    playerContent: {
        flex: 2,

        marginVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    selectConent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        alignSelf: 'auto',

    },
    inforContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'

    },
    buttonContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',


    },
  
    imgCommand: {
        width: 90,
        height: 90,

    },
    smallimg: {
        width: 60, height: 60
    },
    arrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 14,
        borderRightWidth: 14,
        borderTopWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        alignSelf: 'center',
        position: 'absolute',
        bottom: -10,
        borderTopColor: 'yellow'


    },
    styleBorder: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderColor: 'yellow',
        borderWidth: 2,
        borderRadius: 6,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playerBorder: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoretxt: {
        fontSize: 30,
        color: '#00fecd',
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 8,
        width: 100,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        marginHorizontal: 5
    },
    buttonTxt: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
})