import React from 'react';

const EmptyView: React.FC = function({ children }) {
  return <div className="children">{ children }</div>;
};

export default EmptyView;
