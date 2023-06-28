import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../assets/photoBg.jpg")}
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.containerBloc}
        >
          <View style={styles.regBloc}>
            <View></View>
            <View style={styles.addPhoto}></View>
            <Text style={styles.regTxt}>Реєстрація</Text>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              keyboardType="numeric"
              secureTextEntry={true}
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.signUpBtn}>
              <Text style={styles.signUpBtnTxt}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    position: "relative",
  },
  containerBloc: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    marginTop: 263,
    justifyContent: "center",
    alignItems: "center",
  },
  addPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
  },
  regBloc: {
    alignItems: "center",
    marginHorizontal: 16,
  },
  regTxt: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 33,
    marginTop: 92,
  },
  input: {
    borderWidth: 1,
    borderColor: "#F6F6F6",
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    width: 343,
    height: 50,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 15,
    marginBottom: 16,
  },
  signUpBtn: {
    width: 343,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    marginTop: 43,
  },
  signUpBtnTxt: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default RegistrationScreen;
