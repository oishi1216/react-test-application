import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Page1 } from '../Page1';
import { Page2 } from '../Page2';
import { UrlParameter } from '../UrlParameter';
import { page1Routes } from './Page1Routes';

export const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Page1' element={<Page1 />}>
                {page1Routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.children}></Route>
                ))}
            </Route>
            <Route path='Page2' element={<Page2 />}>
                <Route path=':id' element={<UrlParameter />} />
            </Route>
        </Routes>
    )
}