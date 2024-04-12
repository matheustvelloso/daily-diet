import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from 'src/screens/Home';
import { Progress } from 'src/screens/Progress';
import { CreateSnack } from 'src/screens/CreateSnack';
import { themes } from 'src/themes/index';
import { CreateSnackSuccessful } from 'src/screens/CreateSnackSuccessful';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes: React.FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false, animation: 'fade_from_bottom', }} >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Progress"
                component={Progress}
            />
            <Screen
                name="CreateSnack"
                component={CreateSnack}
                options={{
                    headerShown: true,
                    headerTitle: 'Nova refeição',
                    headerTitleStyle: { fontSize: themes.font_size.xl, fontFamily: themes.font_family.bold },
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                }}
            />
            <Screen
                name="CreateSnackSuccessful"
                component={CreateSnackSuccessful}
            />
        </Navigator>
    )

}