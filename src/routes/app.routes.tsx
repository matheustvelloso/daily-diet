import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Progress } from '@screens/Progress';
import { CreateSnack } from '@screens/CreateSnack';
import { themes } from 'src/themes/index';
import { CreateSnackSuccessful } from '@screens/CreateSnackSuccessful';
import { Snack } from '@screens/Snack';

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
            <Screen
                name="Snack"
                component={Snack}
                options={{
                    headerShown: true,
                    headerTitle: 'Refeição',
                    headerTitleStyle: { fontSize: themes.font_size.xl, fontFamily: themes.font_family.bold },
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                }}
            />
        </Navigator>
    )

}