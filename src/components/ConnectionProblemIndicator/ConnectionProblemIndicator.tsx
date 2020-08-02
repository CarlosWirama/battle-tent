import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  subscribeDisconnected,
  subscribeReconnecting,
  subscribeReconnectError,
  subscribeReconnectFailed,
  subscribeReconnected,
} from '../../api';

export default function ConnectionProblemIndicator() {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    subscribeReconnecting(() => setShowIndicator(true));
    subscribeReconnected(() => setShowIndicator(false));
  }, []);

  return (
    <OverlayBase show={showIndicator}>
      <CircularProgress />
      <p>Reconnecting...</p>
    </OverlayBase>
  )
}

const OverlayBase = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: ${props => props.show ? 'flex' : 'none'};

  // make the component centered
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  color: white;
`;
