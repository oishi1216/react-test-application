import { CssModules } from './components/CssModules';
import { Emotion } from './components/Emotion';
import { InlineStyle } from './components/InlineStyle';
import { StyledComponent } from './components/StyledComponents';
import { StyledJsx } from './components/StyledJsx';

export const App = () => {
  return (
    <>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponent />
      <Emotion />
    </>

  );
};
