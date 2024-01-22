import React from "react";
import { View } from "react-native";
import { Button, ImageBackground } from "react-native";
import image from '../backgrounds/login_background.png'
import { TextInput } from 'react-native-paper';


export default function SignUp({ navigation }) {
    const [name, setName] = React.useState("");

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const SignUp = () => {
        signUpClass = { name: name, email: email, password: password }
        console.log(signUpClass)

    }

    const getProfile = () => {

        return <View className='h-full'>
            <ImageBackground className="h-full justify-center" source={image} resizeMode="cover" >
                <View className='px-3'>
                    <TextInput
                        className='mb-4'
                        label="name"
                        value={name}
                        onChangeText={name => setName(name)}
                    />
                    <TextInput
                        className='mb-4'
                        label="Email"
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                    <TextInput
                        className='mb-10'
                        label="Password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />
                    <Button onPress={SignUp} className='mt-10' title='Sign up' />
                </View>
            </ImageBackground>

        </View>

    }

    return (
        <View >
            {getProfile()}
        </View>
    )
}