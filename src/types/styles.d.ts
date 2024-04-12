import 'styled-components/native'

import { themes } from 'src/themes/index'

declare module 'styled-components/native' {
    type ThemeType = typeof themes;

    export interface DefaultTheme extends ThemeType { }
}

