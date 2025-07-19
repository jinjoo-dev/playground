import { BrowserRouter, Route, Routes } from 'react-router';
import App from '.';
import { LineHeightSeeMore, RefTransition } from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ref-transition" element={<RefTransition />} />
        <Route path="/line-height-see-more" element={<LineHeightSeeMore />} />
      </Routes>
    </BrowserRouter>
  );
};
