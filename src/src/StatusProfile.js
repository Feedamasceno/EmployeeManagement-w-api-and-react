import React from 'react';

function StatusProfile({ status }) {
  const getBackgroundColor = () => {
    if (status === 'Active') {
      return '#2fbf71';
    } else if (status === 'Inactive') {
      return '#a30b37';
    }
  };

  const style = {
    backgroundColor: getBackgroundColor(),
  };

  return <div className="StatusProfile" style={style}>{status}</div>;
}

export default StatusProfile;
