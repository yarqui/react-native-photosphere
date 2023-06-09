import {
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import PropTypes from "prop-types";
import globalStyles from "../../utils/globalStyles";

const KeyboardContainer = ({ hideKeyboard, children }) => {
  return (
    // FIXME: This👇 TouchableWithoutFeedback prevents scrollable content scrolling for some reason. You may encounter this issue in CommentScreen's FlatList until you remove it from there
    <TouchableWithoutFeedback
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      onPress={hideKeyboard}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          style={globalStyles.bgImage}
          source={require("../../images/bg.jpg")}
        />

        <KeyboardAvoidingView
          style={globalStyles.keyboardAvoiding}
          behavior={Platform.OS == "ios" ? "padding" : ""}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

KeyboardContainer.propTypes = {
  hideKeyboard: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default KeyboardContainer;
