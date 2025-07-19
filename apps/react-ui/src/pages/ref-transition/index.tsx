// reference: https://velog.io/@k-svelte-master/react19-useref
// 단점: strict mode 에서 문제가 발생할 수 있음

import { Link } from 'react-router';
import { useFade } from './hooks/use-fade';
import { useState, type CSSProperties } from 'react';

const containerStyle: CSSProperties = {
  height: '600px',
};

const contentWrapperStyle: CSSProperties = {
  marginTop: '32px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
};

const boxStyle: CSSProperties = {
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
      <Link to="/">← Back</Link>
      <div style={contentWrapperStyle}>
        <button onClick={() => setShowElement((prev) => !prev)}>
          {showElement ? 'hide' : 'show'}
        </button>
        <div>
          {showElement && (
            <div style={boxStyle} ref={fade({ duration: 300 })}>
              HI
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
