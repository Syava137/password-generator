export interface Theme {
    '--background': Color;
    '--text': Color;
    '--form': Color;
    '--hover': Color;
    '--active': Color;
    '--shadow': Color;
}

export enum Color {
    LIGHT_PINK = '#FFE3EC',
    MAIN_PINK_LIGHT = '#FFC8DA',
    TEXT_FOR_LIGHT = '#332026',
    ACTIVE_FOR_LIGHT = '#CC839B',
    HOVER_FOR_LIGHT = '#FFADC8',
    SHADOW_FOR_LIGHT = 'rgba(51, 32, 38, 0.50)',

    DARK_PINK = '#996274',
    MAIN_PINK_DARK = '#CC839B',
    TEXT_FOR_DARK = '#FFECF2',
    ACTIVE_FOR_DARK = '#FFB6CE',
    HOVER_FOR_DARK = '#E593AE',
    SHADOW_FOR_DARK = 'rgba(255, 236, 242, 0.50)'
}


export type ThemeType = 'light' | 'dark'

export const THEMES: Record<ThemeType, Theme> = {
    light: {
        '--background': Color.LIGHT_PINK,
        '--text': Color.TEXT_FOR_LIGHT,
        '--form': Color.MAIN_PINK_LIGHT,
        '--hover': Color.HOVER_FOR_LIGHT,
        '--active': Color.ACTIVE_FOR_LIGHT,
        '--shadow': Color.SHADOW_FOR_LIGHT,
    },
    dark: {
        '--background': Color.DARK_PINK,
        '--text': Color.TEXT_FOR_DARK,
        '--form': Color.MAIN_PINK_DARK,
        '--hover': Color.HOVER_FOR_DARK,
        '--active': Color.ACTIVE_FOR_DARK,
        '--shadow': Color.SHADOW_FOR_DARK,
    }
}