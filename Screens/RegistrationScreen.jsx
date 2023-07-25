import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import img from "./../assets/photoBg.jpg";
import foto from "./../assets/rectangle.png";
import { Formik } from "formik";
import { Ionicons } from "@expo/vector-icons";
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
import { styles } from "./style.js";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Medium": require("./../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./../assets/fonts/Roboto-Regular.ttf"),
  });
};

function RegistrationScreen() {
  const [isShowKey, setIsShowKey] = useState(false);
  const keyboardHide = () => {
    setIsShowKey(false);
    Keyboard.dismiss();
    setState(initialState);
  };
  const initialState = {
    login: "",
    email: "",
    password: "",
  };

  const [state, setstate] = useState(initialState);
  const [iasReady, setIasReady] = useState(false);

  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      ></AppLoading>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ImageBackground style={styles.imgBg} source={img}>
          <Formik style={{ marginHorizontal: 16 }}>
            <View style={styles.box}>
              <View style={styles.avatar}>
                <Image source={foto} style={styles.avatarImage} />
                {!foto ? (
                  <TouchableOpacity
                    style={styles.btnAddAvatar}
                    activeOpacity={0.9}
                  >
                    <Ionicons name="add" size={20} color="#FF6C00" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.btnRemoveAvatar}
                    activeOpacity={0.9}
                  >
                    <Ionicons name="close" size={20} color="#E8E8E8" />
                  </TouchableOpacity>
                )}
              </View>

              <View style={styles.headerRegistr}>
                <Text style={styles.title}>Реєстрація</Text>
              </View>

              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKey ? -155 : 45,
                }}
              >
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Логін"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => setIsShowKey(true)}
                    value={state.login}
                    onChangeText={(value) =>
                      setstate((prevstate) => ({ ...prevstate, login: value }))
                    }
                  />
                </View>
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

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.button}
                  onPress={keyboardHide}
                >
                  <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomContainer}>
                  <Text style={styles.bottomText}>
                    Вже є акаунт?<Text>Увійти</Text>
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

export default RegistrationScreen;
