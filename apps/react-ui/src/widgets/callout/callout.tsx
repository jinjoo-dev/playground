import type { CSSProperties, PropsWithChildren } from 'react';

const containerStyle: CSSProperties = {
  backgroundColor: '#f1f1f1',
  padding: '10px 14px',
  borderRadius: '6px',
  margin: '16px 0',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '8px',
  wordBreak: 'break-all',
};

export const Callout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div style={containerStyle}>{children}</div>;
};
