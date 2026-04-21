import React from "react";
import {PaperProvider , MD3LightTheme} from "react-native-paper";
import PaperExamples from "./components/Paper";
import Test from "./components/test";
import { View } from "react-native-web";

const theme = {
  ...MD3LightTheme,
  colors:{
    ...MD3LightTheme.colors,
    primary: "blue",
  },
};

export default function App() {
  return (
    // <PaperProvider theme={theme}>
    //   <PaperExamples />
    // </PaperProvider>
    <View>
      <Test/>
    </View>

  );
}
