import React from 'react';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootStack from './navigators/RootStack';


const queryClient = new QueryClient();

export default function App() {
 
 


  const [loaded] = useFonts({
    SatoshiRegular: require('./assets/fonts/Satoshi-Regular.otf'),
    SatoshiBold: require('./assets/fonts/Satoshi-Bold.otf'),
    SatoshiLight: require('./assets/fonts/Satoshi-Light.otf'),
    SatoshiMedium: require('./assets/fonts/Satoshi-Medium.otf'),
  })

  if (!loaded) return null;
  
  return (
    <QueryClientProvider client={queryClient}>
    {<RootStack />}
    </QueryClientProvider>
  )
  }
  



