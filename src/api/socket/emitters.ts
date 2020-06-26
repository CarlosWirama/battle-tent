import { socket, OutboundEvent, OutboundEventParams } from './base';

export function emitLogin(
  name: OutboundEventParams['Login']
) {
  socket.emit(OutboundEvent.Login, name);
}

export function emitFindMatch() {
  socket.emit(OutboundEvent.FindMatch);
}

export function emitCancelFindMatch() {
  socket.emit(OutboundEvent.CancelFindMatch);
}

export function emitLeaveRoom() {
  socket.emit(OutboundEvent.LeaveRoom);
}

export function emitPlayerReady(
  indexes: OutboundEventParams['PlayerReady']
) {
  socket.emit(OutboundEvent.PlayerReady, indexes);
}

export function emitChat(
  quickChat: OutboundEventParams['Chat']
) {
  socket.emit(OutboundEvent.Chat, quickChat);
}

export function emitUseMove(
  actionDetail: OutboundEventParams['UseMove']
) {
  socket.emit(OutboundEvent.UseMove, actionDetail);
}

export function emitEndTurn() {
  socket.emit(OutboundEvent.EndTurn);
}
