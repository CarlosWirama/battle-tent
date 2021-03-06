import React, { useState } from 'react';
import Player from '../types/Player';
import PlayerContext, { guest } from './PlayerContext';

export default function AuthProvider(props: { children: React.ReactNode }) {
  const [player, setPlayer] = useState<Player>(guest);
  return (
    <PlayerContext.Provider value={[player, setPlayer]} {...props} />
  );
}
