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
      </ol>
    </div>
  );
}

export default App;
