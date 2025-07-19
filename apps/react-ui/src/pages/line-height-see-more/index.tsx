// reference: https://www.linkedin.com/posts/utsavmeena_how-to-cut-text-in-css-after-a-few-lines-activity-7343273572045373441-iP3K?utm_source=share&utm_medium=member_desktop&rcm=ACoAACDDbpMBs-kCT7k5bNHIzy3Fu9T_oU7Dcl0

import { Link } from 'react-router';
import { Callout } from '../../widgets';
import type { CSSProperties } from 'react';

const textStyle: CSSProperties = {
  position: 'relative',
  maxHeight: '3lh',
  // NOTE: 아래 주석된 속성은 기존의 방식
  // display: '-webkit-box',
  // WebkitBoxOrient: 'vertical',
  // WebkitLineClamp: 3,
  overflow: 'hidden',
  textAlign: 'left',
  wordBreak: 'break-all',
};

const buttonStyle: CSSProperties = {
  position: 'absolute',
  paddingLeft: '150px',
  insetBlockEnd: 0,
  insetInlineEnd: 0,
  background: 'linear-gradient(to right, transparent, white 60%)',
  color: 'gray',
};

export const LineHeightSeeMore = () => {
  return (
    <div>
      <h1>lh 단위를 활용한 여러줄 말줄임 처리</h1>
      <Link to="/">← Back</Link>
      <Callout>
        <a
          href="https://www.linkedin.com/posts/utsavmeena_how-to-cut-text-in-css-after-a-few-lines-activity-7343273572045373441-iP3K/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACDDbpMBs-kCT7k5bNHIzy3Fu9T_oU7Dcl0"
          target="_blank"
        >
          📌 Reference: utsavmeena@linkedin - Truncate Text in CSS width "see
          more" button
        </a>
        <span>
          여러줄에 대한 말줄임 처리를 할 때 <code>webkit-line-clamp</code>{' '}
          속성을 사용하던 방식보다는 간단히 선언할 수 있다는 장점이 있습니다.
        </span>
        <span>
          다만, 더보기 버튼에 대한 노출 여부는 dom을 참조해 구해야하므로 순수
          css 만으로 기능을 온전히 구현할 수는 없다는 점은 여전합니다.
        </span>
        <span>
          더보기 버튼의 배치에는 <code>inset-block-end</code>와{' '}
          <code>inset-inline-end</code> 속성을 사용했는데, <code>right</code>/
          <code>bottom</code> 속성을 사용하는 것과 딱히 차이가 없습니다.
        </span>
        <span>
          더보기 버튼에 그라데이션 background를 적용하여 내용 같은 라인에
          배치하는 디자인 아이디어를 얻었다는 점에서 의미가 있었습니다.
        </span>
        <p>
          - 지원 브라우저 참고하기{': '}
          <a href="https://caniuse.com/?search=lh%20unit" target="_blank">
            lh unit
          </a>
          {' | '}
          <a
            href="https://caniuse.com/?search=webkit-line-clamp"
            target="_blank"
          >
            webkit-line-clamp
          </a>
        </p>
      </Callout>
      <p style={textStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget risus
        nec dolor tristique consequat ac sed nibh. Integer scelerisque sem ex,
        in ultricies tortor aliquet at. Morbi tempor, leo sed ultrices laoreet,
        erat nulla finibus lectus, bibendum sollicitudin est erat ut nisi. Nunc
        augue leo, pretium eu fringilla ac, convallis at ante. Curabitur
        ullamcorper lacus massa, elementum pellentesque arcu condimentum eget.
        Mauris posuere nunc justo, vel malesuada justo hendrerit nec. Nunc at
        egestas metus. Donec tempor ac dolor non vehicula. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        <span style={buttonStyle}>...see more</span>
      </p>
    </div>
  );
};
