import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, TextField, Button, Spacings, Keyboard} from 'react-native-ui-lib';

const KeyboardAwareInsetsView = Keyboard.KeyboardAwareInsetsView;

class InputValidationsScreen extends Component {
  state = {
    useTopErrors: false
  };

  toggleTopErrors = () => {
    this.setState({useTopErrors: !this.state.useTopErrors});
  };

  render() {
    const {useTopErrors} = this.state;
    return (
      <View flex>
        <ScrollView>
          <View padding-s5 paddingT-60>
            <View absR margin-s5>
              <Button
                size="small"
                label={`TopError : ${useTopErrors ? 'ON' : 'OFF'}`}
                outline={!useTopErrors}
                onPress={this.toggleTopErrors}
              />
            </View>
            <TextField
              title="Required Field"
              containerStyle={styles.input}
              placeholder="Enter Text"
              validate="required"
              errorMessage="This is a mandatory field "
              useTopErrors={useTopErrors}
            />
            <TextField
              title="Email"
              containerStyle={styles.input}
              placeholder="Enter valid email"
              validate="email"
              errorMessage="email is invalid"
              useTopErrors={useTopErrors}
              validateOnChange
            />
            <TextField
              title="Price"
              containerStyle={styles.input}
              placeholder="Enter price"
              validate="price"
              errorMessage="Price is invalid"
              useTopErrors={useTopErrors}
            />
            <TextField
              title="Number"
              containerStyle={styles.input}
              placeholder="Enter a Number"
              validate="number"
              errorMessage="Number is invalid"
              useTopErrors={useTopErrors}
            />
            <TextField
              title="URL"
              containerStyle={styles.input}
              placeholder="Enter a url"
              validate="url"
              errorMessage="Url is invalid"
              useTopErrors={useTopErrors}
            />

            <TextField
              title="Required Email (2 validations)"
              containerStyle={styles.input}
              placeholder="Enter an email"
              validate={['required', 'email']}
              errorMessage={['This field is required', 'Email is invalid']}
              useTopErrors={useTopErrors}
            />
            <TextField
              title="Custom Validation"
              containerStyle={styles.input}
              placeholder="Enter a text that starts with B"
              validate={value => /^B.*/.test(value)}
              errorMessage={'Text does not start with "B"'}
              useTopErrors={useTopErrors}
            />
          </View>
          <KeyboardAwareInsetsView/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginBottom: Spacings.s2
  }
});

export default InputValidationsScreen;
