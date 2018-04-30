import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-6f767.cloudfunctions.net'
class SignUpForm extends Component {
    state = { phone: '' };

    handleSubmit = async () => {
        // Create User w/ Phone Number
        // Second Request runs even if first request was failed
        // With aync/await, requests are only ran if previous requests finished
        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
            // Send OTP Code to Phone Number
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <Button onPress={this.handleSubmit} title="Submit" />
            </View>
        )
    }
}

export default SignUpForm;