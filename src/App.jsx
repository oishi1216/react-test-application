import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { CssModules } from './components/CssModules';
import { Emotion } from './components/Emotion';
import { Home } from './components/Home';
import { InlineStyle } from './components/InlineStyle';
import { Page1 } from './components/Page1';
import { Page1DetailA } from './components/Page1DetailA';
import { Page1DetailB } from './components/Page1DetailB';
import { Page2 } from './components/Page2';
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Page1' element={<Page1 />}>
          <Route path='Page1DetailA' element={<Page1DetailA />} />
          <Route path='Page1DetailB' element={<Page1DetailB />} />
        </Route>
        <Route path='Page2' element={<Page2 />} />
      </Routes>
    </BrowserRouter>

  );
};
