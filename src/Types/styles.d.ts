import 'styled-components/native'

import { themes } from '@theme/index'

declare module 'styled-components/native' {
    type ThemeType = typeof themes;

    export interface DefaultTheme extends ThemeType { }
}

