import React from 'react';
import { View } from 'react-native';

function User(props) {
    return (
        <View style={styles.container}>
            <Text>{props.user.name}r</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        borderWidth:3,
        borderColor:blue,
        margin:5,
        padding:5,
        borderRadius:15,
        
    }
})

export default User;
