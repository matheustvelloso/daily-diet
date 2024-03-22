import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { AppRoutes } from './app.routes'


export const Routes: React.FC = () => {
    const { base } = useTheme()

    return (
        <View style={{ flex: 1, backgroundColor: base.gray_600 }}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}