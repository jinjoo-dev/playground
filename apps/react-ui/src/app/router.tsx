import { BrowserRouter, Route, Routes } from 'react-router';
import App from '.';
import { RefTransition } from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ref-transition" element={<RefTransition />} />
      </Routes>
    </BrowserRouter>
  );
};
