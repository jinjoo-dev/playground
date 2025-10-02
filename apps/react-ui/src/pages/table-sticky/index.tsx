import { useState, type CSSProperties } from 'react';

const containerStyle: CSSProperties = {
  display: 'flex',
};

const navigationStyle: CSSProperties = {
  width: '300px',
  height: '100vh',
  backgroundColor: 'orange',
  flexShrink: 0,
};

const screenStyle: CSSProperties = {
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
};

const topFixedStyle: CSSProperties = {
  position: 'sticky',
  top: 0,
  left: 0,
  backgroundColor: 'green',
  zIndex: 10,
  width: '100%',
  height: '50px',
  paddingLeft: '10px',
};

const tableHeaderStyle: CSSProperties = {
  position: 'sticky',
  top: 50,
  left: 0,
  backgroundColor: 'lightgray',
  zIndex: 10,
  height: '50px',
  border: '1px solid black',
};

const tableStyle: CSSProperties = {
  tableLayout: 'fixed',
  borderCollapse: 'collapse',
};

const tableBodyStyle: CSSProperties = {
  backgroundColor: 'skyblue',
};

const tableCellStyle: CSSProperties = {
  padding: '10px',
  border: '1px solid black',
  whiteSpace: 'nowrap',
  minWidth: '100px',
};

export const TableSticky = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);

  return (
    <div style={containerStyle}>
      {isOpenNavigation && <div style={navigationStyle}>Navigation</div>}
      <div style={screenStyle}>
        {/* <div> // 감싸고 있는게 하나라도 있으면 가로스크롤일 때 sticky left:0 적용 안됨 */}
        <div style={topFixedStyle}>
          sticky top fixed
          <button
            onClick={() => {
              setIsOpenNavigation(!isOpenNavigation);
            }}
          >
            네비게이션 토글
          </button>
        </div>
        <div style={tableHeaderStyle}>sticky1</div>
        <div style={tableHeaderStyle}>sticky2</div>
        <table style={tableStyle}>
          <thead style={tableHeaderStyle}>
            <tr>
              {Array.from({ length: 20 }).map((_, index) => (
                <th key={index} style={tableCellStyle}>
                  헤더{index}
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={tableBodyStyle}>
            {Array.from({ length: 300 }).map((_, index) => (
              <tr key={index}>
                {Array.from({ length: 20 }).map((_, index) => (
                  <td key={index} style={tableCellStyle}>
                    내용{index}
                    {index === 10 && '10101010101001010101010010'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
