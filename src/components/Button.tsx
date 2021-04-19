import React from 'react';
import { Text, TouchableOpacity,TouchableOpacityProps, StyleSheet} from 'react-native';

import colors from '../../styles/colors';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

export function Button({title, ... rest} : ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.6}
            {... rest}
        >
            <Text style={styles.buttonText}>
                { title }
            </Text>                
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:14,
        height:56,
        width:56
    },
    buttonText:{
        color: colors.white,
        fontSize:26
    }
})