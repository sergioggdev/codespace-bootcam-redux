/* tslint:disable:no-duplicate-imports */
import { ThemedStyledComponentsModule } from 'styled-components';
import * as styledComponents from 'styled-components';

import { ThemeInterface } from '@Assets';

export const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;
