import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
} from '@expo-google-fonts/nunito-sans'

import { themes } from 'src/themes/index';
import { Routes } from 'src/routes/index';
import { Loading } from 'src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold
  })

  return (
    <ThemeProvider theme={themes}>
      <StatusBar
        translucent
        backgroundColor='transparent'
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}

