import './App.css';
import { Link } from 'react-router';

function App() {
  return (
    <div>
      <h1>Jinjoo-dev</h1>
      <h2>Playground</h2>

      <ol>
        <li>
          <Link to="/ref-transition">RefTransition</Link>
        </li>
        <li>
          <Link to="/line-height-see-more">
            lh 단위를 활용한 여러줄 말줄임 처리
          </Link>
        </li>
      </ol>
    </div>
  );
}

export default App;
