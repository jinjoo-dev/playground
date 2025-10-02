import { BrowserRouter, Route, Routes } from 'react-router';
import App from '.';
import { LineHeightSeeMore, RefTransition } from '../pages';
import { TableSticky } from '../pages/table-sticky';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ref-transition" element={<RefTransition />} />
        <Route path="/line-height-see-more" element={<LineHeightSeeMore />} />
        <Route path="/table-sticky" element={<TableSticky />} />
      </Routes>
    </BrowserRouter>
  );
};
