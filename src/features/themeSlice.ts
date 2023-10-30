import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'system' | 'light' | 'dark';

export interface ThemeSlice {
  theme: Theme;
}

const initialState: ThemeSlice = {
  theme:
    (window.localStorage.getItem('KEYSMITH_UI_THEME') as Theme) ??
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'system' | 'light' | 'dark'>) => {
      const preferredColorScheme = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
        ? 'dark'
        : 'light';
      const theme =
        action.payload === 'system' ? preferredColorScheme : action.payload;
      state.theme = action.payload;
      window.localStorage.setItem('KEYSMITH_UI_THEME', theme);
      window.document.documentElement.setAttribute('data-theme', theme);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
