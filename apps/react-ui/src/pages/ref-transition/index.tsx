// reference: https://velog.io/@k-svelte-master/react19-useref
// 단점: strict mode 에서 문제가 발생할 수 있음

import { Link } from 'react-router';
import { useFade } from './hooks/use-fade';
import { useState } from 'react';

const containerStyle = {
  height: '600px',
};

const boxStyle = {
  width: '100px',
  height: '100px',
  backgroundColor: 'red',
};

export const RefTransition = () => {
  const [showElement, setShowElement] = useState(true);

  const fade = useFade();

  return (
    <div style={containerStyle}>
      <h1>RefTransition</h1>
      <button onClick={() => setShowElement((prev) => !prev)}>
        {showElement ? 'hide' : 'show'}
      </button>
      <Link to="/">← Back</Link>
      <div>
        {showElement && (
          <div style={boxStyle} ref={fade({ duration: 300 })}>
            HI
          </div>
        )}
      </div>
    </div>
  );
};
