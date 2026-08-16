import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router'
import { useColorScheme } from 'react-native'
import 'react-native-reanimated'
import '../../global.css'
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://25376a12aa76dbd781b6750d6bec5173@o4511917457145856.ingest.us.sentry.io/4511917464944640',

  // Adds more context data to events (IP address, cookies, user, etc.)        
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)    
  // spotlight: __DEV__,
});




export const unstable_settings = {
  anchor: '(tabs)',
}

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>

        </Stack>
      </ThemeProvider>
    </ClerkProvider>
  )
}

export default Sentry.wrap(RootLayout);
