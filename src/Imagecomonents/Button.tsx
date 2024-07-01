import { View, Image, Text, StyleSheet } from "react-native";

const GoogleButton = () => {
    return (
        <View style={styles.button}>
            <Image
                style={styles.buttonImage}
                source={require('./Button/googleButton.png')}
            />
            {/* <Text style={styles.buttonText}>Sign in with Google</Text> */}
        </View>
    );
}

const FacebookButton = () => {
    return (
        <View style={styles.button}>
            <Image
                style={styles.buttonImage}
                source={require('./Button/facebookButton.png')}
            />
            {/* <Text style={styles.buttonText}>Sign in with Facebook</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
   
     
    
    
    },
    buttonImage: {
        width: 50,
        height: 50,
        borderRadius: 20,
    
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
})
  

export  {GoogleButton, FacebookButton};