import React from 'react';
import {View,Text,StyleSheet,Button, TouchableOpacity} from 'react-native';

const ButtonScreen=()=>{
    return(
        <View>
            <text style={textStyle}>ButtonScreen</text>
            <Button 
            title='Click me'
            color='purple'
            onPress={()=>console.log('Dugme je kliknuto: ',brojac++)}
            />

            <TouchableOpacity onPress={()=>console.log('TouchableOpacity kliknut: ',counter++)}>
                <Text>Clickabilni text elemneti</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    testStyle:{
        textAlign:'center',
        marginTop:10,
        fontSize:16,
        marginBottom:10
    }
});

export default ButtonScreen;