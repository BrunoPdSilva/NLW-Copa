import { NativeBaseProvider, StatusBar} from "native-base";

import { Signin } from "./src/screens/Signin";
import { Loading } from "./src/components/Loading";

import { THEME } from "./src/styles/theme";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {fontsLoaded ? <Signin /> : <Loading />}
    </NativeBaseProvider>
  );
}