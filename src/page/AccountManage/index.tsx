import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';

const AccountManagePage: React.FC = () => {
  // @ts-ignore
  const Row = ({ index, style }) => <div style={style}>Row {index}</div>;
  return (
    <div style={{ height: '100%' }}>
      <div>账号管理</div>
      <AutoSizer>
        {({ width, height }) => (
          <FixedSizeList itemSize={35} height={height} itemCount={1000} width={width}>
            {Row}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
};

export default AccountManagePage;
