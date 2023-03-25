import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Avatar from "../../components/Avatar";
import KeyboardContainer from "../../components/KeyboardContainer";
import globalStyles from "../../utils/globalStyles";
import regScreenStyles from "./regScreenStyles";

const initialUserState = {
  login: "",
  email: "",
  password: "",
  avatar: null,
};

const RegistrationScreen = ({
  keyboardIsShown,
  passwordIsShown,
  setPasswordIsShown,
  hideKeyboard,
  handleActiveKeyboard,
}) => {
  const [userData, setUserData] = useState(initialUserState);
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  const { login, email, password } = userData;

  useEffect(() => {
    if (login && email && password) {
      return setReadyToSubmit(true);
    }
    setReadyToSubmit(false);
  }, [login, email, password]);

  return (
    <KeyboardContainer hideKeyboard={hideKeyboard}>
      <View
        style={{
          ...regScreenStyles.regUnderlay,
          marginTop: keyboardIsShown ? 124 : 240,
        }}
      >
        <View style={globalStyles.appContainer}>
          <Avatar style={regScreenStyles.regAvatarUnderlay}></Avatar>
          <View style={globalStyles.authInputContainer}>
            <Text style={globalStyles.authTitle}>Registration</Text>

            <TextInput
              style={globalStyles.authInput}
              placeholder="Login"
              placeholderTextColor={"#BDBDBD"}
              name="login"
              keyboardType={"default"}
              value={userData.login}
              onFocus={handleActiveKeyboard}
              onSubmitEditing={hideKeyboard}
              onChangeText={(value) =>
                setUserData((prevUserData) => ({
                  ...prevUserData,
                  login: value,
                }))
              }
            />

            <TextInput
              style={globalStyles.authInput}
              placeholder="Email"
              placeholderTextColor={"#BDBDBD"}
              name="email"
              keyboardType={"email-address"}
              value={userData.email}
              onFocus={handleActiveKeyboard}
              onSubmitEditing={hideKeyboard}
              onChangeText={(value) =>
                setUserData((prevUserData) => ({
                  ...prevUserData,
                  email: value.trim().toLocaleLowerCase(),
                }))
              }
            />

            <View style={globalStyles.passwordContainer}>
              <TextInput
                style={globalStyles.authInput}
                placeholder="Password"
                name="password"
                keyboardType={"default"}
                value={userData.password}
                onFocus={handleActiveKeyboard}
                secureTextEntry={!passwordIsShown}
                placeholderTextColor={"#BDBDBD"}
                onSubmitEditing={hideKeyboard}
                onChangeText={(value) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    password: value.trim(),
                  }))
                }
              />

              <TouchableOpacity activeOpacity={0.8}>
                <Text
                  style={globalStyles.showPasswordText}
                  onPress={() => {
                    setPasswordIsShown(!passwordIsShown);
                  }}
                >
                  {passwordIsShown ? "Hide" : "Show"}
                </Text>
              </TouchableOpacity>
            </View>

            {!keyboardIsShown && (
              <>
                <TouchableOpacity
                  style={{
                    ...globalStyles.authBtn,
                    backgroundColor: readyToSubmit ? "#FF6C00" : "#878787",
                  }}
                  disabled={!readyToSubmit}
                  activeOpacity={0.8}
                  onPress={() => {
                    console.log("future submit form logic", userData);
                    setUserData(initialUserState);
                  }}
                >
                  <Text style={globalStyles.authBtnText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    console.log("future navigation to log in screen");
                  }}
                >
                  <Text style={globalStyles.authAccountPrompt}>
                    Have an account? Sign In
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    </KeyboardContainer>
  );
};

RegistrationScreen.propTypes = {
  keyboardIsShown: PropTypes.bool.isRequired,
  passwordIsShown: PropTypes.bool.isRequired,
  setPasswordIsShown: PropTypes.func.isRequired,
  handleActiveKeyboard: PropTypes.func.isRequired,
  hideKeyboard: PropTypes.func.isRequired,
};

export default RegistrationScreen;