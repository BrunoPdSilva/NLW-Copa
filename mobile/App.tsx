import { NativeBaseProvider, StatusBar} from "native-base";

// Components
import { Signin } from "./src/screens/Signin";
import { Loading } from "./src/components/Loading";

// Styles
import { THEME } from "./src/styles/theme";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { AuthContextProvider } from "./src/contexts/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

        {fontsLoaded ? <Signin /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}