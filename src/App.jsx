import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './components/router/Router'
import { CssModules } from './components/CssModules';
import { Emotion } from './components/Emotion';
import { InlineStyle } from './components/InlineStyle';
import { StyledComponent } from './components/StyledComponents';
import { StyledJsx } from './components/StyledJsx';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponent />
        <Emotion />
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>

  );
};
