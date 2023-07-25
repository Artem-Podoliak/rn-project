import { useState } from "react";
import { Formik } from "formik";
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import img from "./../assets/photoBg.jpg";
import { styles } from "./style.js";
// import * as Font from "expo-font";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Medium": require("./../assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Regular": require("./../assets/fonts/Roboto-Regular.ttf"),
//   });
// };

function LoginScreen() {
  const [isShowKey, setIsShowKey] = useState(false);
  const keyboardHide = () => {
    setIsShowKey(false);
    Keyboard.dismiss();
    setstate(initialState);
  };
  const initialState = {
    email: "",
    password: "",
  };

  const [state, setstate] = useState(initialState);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ImageBackground style={styles.imgBg} source={img}>
          <Formik>
            <View style={styles.box}>
              <View style={styles.headerLogin}>
                <Text style={styles.title}>Увійти</Text>
              </View>

              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKey ? -165 : 111,
                }}
              >
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => setIsShowKey(true)}
                    value={state.email}
                    onChangeText={(value) =>
                      setstate((prevstate) => ({ ...prevstate, email: value }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    keyboardType="numeric"
                    secureTextEntry={true}
                    onFocus={() => setIsShowKey(true)}
                    value={state.password}
                    onChangeText={(value) =>
                      setstate((prevstate) => ({
                        ...prevstate,
                        password: value,
                      }))
                    }
                  />
                </View>

                <TouchableOpacity style={styles.button} onPress={keyboardHide}>
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.bottomContainer}
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.bottomText}>
                    Немає акаунту?<Text>Зареєструватися</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Formik>
        </ImageBackground>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
