import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'


export const Routes: React.FC = () => {

    return (
        <View style={{ flex: 1, backgroundColor: 'tranparent' }}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}