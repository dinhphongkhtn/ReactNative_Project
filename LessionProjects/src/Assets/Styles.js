
import { StyleSheet } from "react-native";

export const AppColors =
{
    Background: 'white',
    HeaderBar:'green',
    TextColor:'black',
    SecondBackground:'white',
    Sperator:'black',
    Cmd_Remove:'red',
    Cmd_Edit:'yellow',
    Cmd_View:'green'
}

const AppStyles = StyleSheet.create({

    primaryText: {
        color: AppColors.TextColor,
        fontSize: 20,
        fontWeight: 'bold'
    },
    secondText: {
        color:AppColors.TextColor,
        fontSize: 13,
    },
    button: {
        borderColor: 'transparent',
        width: 25,
        height: 25,
        borderWidth: 2,
        marginLeft: 10
    },

});



export default AppStyles;