import type { CSSProperties } from 'react';
import './App.css';
import { Link } from 'react-router';

const dateStyle: CSSProperties = {
  fontSize: '12px',
  color: 'gray',
  marginLeft: '8px',
};

function App() {
  return (
    <div>
      <h1>Jinjoo-dev</h1>
      <h2>Playground</h2>

      <ol>
        <li>
          <Link to="/ref-transition">RefTransition</Link>
          <span style={dateStyle}>2025/07/12</span>
        </li>
        <li>
          <Link to="/line-height-see-more">
            lh 단위를 활용한 여러줄 말줄임 처리
          </Link>
          <span style={dateStyle}>2025/07/20</span>
        </li>
      </ol>
    </div>
  );
}

export default App;
