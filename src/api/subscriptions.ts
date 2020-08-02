import { socket, InboundEventParams, InboundEvent } from './base';

socket.on('disconnect', (reason: string) => {
  if (reason === 'io server disconnect') {
    // the disconnection was initiated by the server, you need to reconnect manually
    socket.connect();
  }
  // else the socket will automatically try to reconnect
});

socket.on('reconnect_failed', () => {
  // ...
});

export function subscribeDisconnected(
  callback: (reason: string) => void
) {
  socket.on('disconnect', callback);
}

export function subscribeReconnecting(
  callback: () => void
) {
  socket.on('reconnecting', callback);
}

export function subscribeReconnected(
  callback: () => void
) {
  socket.on('reconnect', callback);
}

export function subscribeReconnectError(
  callback: (error: any) => void
) {
  socket.on('reconnect_error', callback);
}

export function subscribeReconnectFailed(
  callback: () => void
) {
  socket.on('reconnect_failed', callback);
}

export function subscribePlayers(
  callback: (players: InboundEventParams['ListPlayers']) => void
) {
  socket.on(InboundEvent.ListPlayers, callback);
  return { off: () => socket.off(InboundEvent.ListPlayers) };
}

export function subscribeLoggedIn(
  callback: (status: InboundEventParams['LoggedIn']) => void
) {
  socket.on(InboundEvent.LoggedIn, callback);
  return { off: () => socket.off(InboundEvent.LoggedIn) };
}

export function subscribeFindingMatch(
  callback: (status: InboundEventParams['FindingMatch']) => void
) {
  socket.on(InboundEvent.FindingMatch, callback);
  return { off: () => socket.off(InboundEvent.FindingMatch) };
}

export function subscribeFindingAi(
  callback: (status: InboundEventParams['FindingAi']) => void
) {
  socket.on(InboundEvent.FindingAi, callback);
  return { off: () => socket.off(InboundEvent.FindingAi) };
}

export function subscribeCancelledFindingMatch(
  callback: (status: InboundEventParams['CancelledFindingMatch']) => void
) {
  socket.on(InboundEvent.CancelledFindingMatch, callback);
  return { off: () => socket.off(InboundEvent.CancelledFindingMatch) };
}

export function subscribeJoinedTheRoom(
  callback: (status: InboundEventParams['JoinedTheRoom']) => void
) {
  socket.on(InboundEvent.JoinedTheRoom, callback);
  return { off: () => socket.off(InboundEvent.JoinedTheRoom) };
}

export function subscribeLeftTheRoom(
  callback: (status: InboundEventParams['LeftTheRoom']) => void
) {
  socket.on(InboundEvent.LeftTheRoom, callback);
  return { off: () => socket.off(InboundEvent.LeftTheRoom) };
}

export function subscribePlayerJoinedTheRoom(
  callback: (status: InboundEventParams['PlayerJoinedTheRoom']) => void
) {
  socket.on(InboundEvent.PlayerJoinedTheRoom, callback);
  return { off: () => socket.off(InboundEvent.PlayerJoinedTheRoom) };
}

export function subscribePlayerLeftTheRoom(
  callback: (status: InboundEventParams['PlayerLeftTheRoom']) => void
) {
  socket.on(InboundEvent.PlayerLeftTheRoom, callback);
  return { off: () => socket.off(InboundEvent.PlayerLeftTheRoom) };
}

// unimplemented from backend

export function subscribeChat(
  callback: (chat: InboundEventParams['Chat']) => void
) {
  socket.on(InboundEvent.Chat, callback);
  return { off: () => socket.off(InboundEvent.Chat) };
}

export function subscribeRoundStarted(
  callback: (battleState: InboundEventParams['RoundStarted']) => void
) {
  socket.on(InboundEvent.RoundStarted, callback);
  return { off: () => socket.off(InboundEvent.RoundStarted) };
}

export function subscribeTurnChanged(
  callback: (battleState: InboundEventParams['TurnChanged']) => void
) {
  socket.on(InboundEvent.TurnChanged, callback);
  return { off: () => socket.off(InboundEvent.TurnChanged) };
}

export function subscribeMoveUsed(
  callback: (params: InboundEventParams['MoveUsed']) => void
) {
  socket.on(InboundEvent.MoveUsed, callback);
  return { off: () => socket.off(InboundEvent.MoveUsed) };
}

export function subscribeGameOver(
  callback: (params: InboundEventParams['GameOver']) => void
) {
  socket.on(InboundEvent.GameOver, callback);
  return { off: () => socket.off(InboundEvent.GameOver) };
}
