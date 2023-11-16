import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import AppLayout from './ui/AppLayout';
import Success from './pages/Success';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/success' element={<Success />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
