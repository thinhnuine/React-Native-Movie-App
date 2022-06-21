import { SafeAreaProvider } from "react-native-safe-area-context"
import AppProvider from "./Context"
import Layout from "./Layout/Layout"


export default function App() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <Layout/>
      </SafeAreaProvider>
    </AppProvider>
  )
}
