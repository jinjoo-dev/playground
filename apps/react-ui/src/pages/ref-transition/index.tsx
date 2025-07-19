import { Link } from 'react-router';
import { useFade } from './hooks/use-fade';
import { useState, type CSSProperties } from 'react';
import { Callout } from '../../widgets';

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

      <Callout>
        <a href="https://velog.io/@k-svelte-master/react19-useref">
          📌 Reference: https://velog.io/@k-svelte-master/react19-useref
        </a>
        <span>
          리액트 19에서
          <a href="https://mycodings.fly.dev/blog/2024-07-14-react-19-tutorial-4-context-provider-discouraged-ref-cleanup-usedeferredvalue-improvements#ref-%EC%BD%9C%EB%B0%B1%EC%9D%98-%ED%81%B4%EB%A6%B0%EC%97%85-%ED%95%A8%EC%88%98">
            ref 콜백함수에 클린업 함수를 반환할 수 있는 기능이 추가
          </a>
          되면서, 이를 활용하여 컴포넌트 마운트/언마운트 시점에 애니메이션을
          구현하는 방법을 시도했습니다.
        </span>
        <span>
          이 기술의 핵심은 클린업 함수에서 꺼낼 수 있는 노드를 클론하여 언마운트
          시점에도 애니메이션을 구현하는 것입니다.
        </span>
        <span>
          기존에는 ref에 useRef로 선언한 변수만 넘겨서 사용했지만, 콜백함수를
          넘길 수 있음을 알게되었고 이를 활용하는 방법으로 참신한
          아이디어였습니다.
        </span>
        <span>
          다만, 마운트 애니메이션이 적용되는 노드와 언마운트 노드가 구분되는
          것에 어떤 의의가 있을지는 모르겠고, 되려 사이드이펙트가 생기진 않을까
          우려스럽습니다. 또한 strict mode에서 동작이 이상하게 되는 문제가 있어
          실제 활용하기에는 어려움이 있습니다.
        </span>
      </Callout>

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
