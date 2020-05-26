import React, { useState, useContext, useEffect } from 'react';
import { Input, Button } from '../../components/basics';
import Modal, { ModalProps } from '../../components/Modal';
import LoadingIndicator from '../../components/LoadingIndicator';
import { NavigationContext, ScreenState } from '../../navigation';
import Auth from '../../utils/auth';
import { LayoutContainer } from './Lobby.styled';
import { LOBBY_BGM_PATH } from '../../constants/paths/audio';
import Music from '../../Music';
import { subscribeFindingMatch, subscribeJoinedTheRoom, findMatch } from '../../apis/battleApi';

const LobbyScreenBgm = new Audio(LOBBY_BGM_PATH);

export default function Lobby() {
  const [inviteModalShown, setInviteModalShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useContext(NavigationContext);

  useEffect(() => {
    Music.play(LobbyScreenBgm);

    const sFindingMatch = subscribeFindingMatch(() => {
      setIsLoading(true);
    });

    const sJoinedTheRoom = subscribeJoinedTheRoom(() => {
      setIsLoading(false);

      navigate(ScreenState.Battle);
    });

    return () => {
      Music.stop();

      sFindingMatch.off();
      sJoinedTheRoom.off();
    }
  }, []);

  async function onFindMatch() {
    findMatch();
  }
  async function onInviteMatch() {
    setIsLoading(true);
    try {
      const response = await fetch('');
      if (response.status !== 200) throw response;
    } catch (e) {
      console.error(e);
      alert(e);
    }
    setIsLoading(false);
  }

  function openInviteModal() {
    setInviteModalShown(true);
    onInviteMatch();
  }
  function closeInviteModal() {
    setInviteModalShown(false);
  }

  function onSignOut() {
    Auth.signout();
    navigate(ScreenState.Login);
  }

  return (
    <LayoutContainer>
      <InviteModal shown={inviteModalShown} onClose={closeInviteModal} />
      <header>
        <h1>Battle Tent</h1>
      </header>
      {isLoading ? <LoadingIndicator /> :
        <div>
          <Button onClick={onFindMatch}>Find match</Button>
          <Button disabled onClick={openInviteModal}>Invite</Button>
          <Button onClick={onSignOut}>Change name</Button>
        </div>
      }
    </LayoutContainer>
  );
}

function InviteModal({ shown, onClose }: Omit<ModalProps, 'children'>) {
  return (
    <Modal shown={shown} onClose={onClose}>
      Who do you want to invite?
      <Input />
    </Modal>
  );
}
