import React, { useState, useEffect, useContext } from 'react';
import Pokemon from '../../../../types/Pokemon';
import { Button } from '../../../../components/basics';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import {
  fetchPokemonList,
  emitSelectParty,
  subscribeRoundStarted,
} from '../../../../api';
import * as helper from '../../../../api/socket/helper';
import { TileContainer, Tile, TileDetail } from './ChooseParty.styled';
import { find, equals, append, without } from 'ramda';
import GamplayContext from '../../GameplayContext';
import { PlayerContext } from '../../../../auth';

export interface ChoosePartyProps {
  onFinish: () => void;
}

export default function ChooseParty({
  onFinish,
}: ChoosePartyProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isWaitingOpponent, setIsWaitingOpponent] = useState(false);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [choosen, setChoosen] = useState<Array<Pokemon['ndex']>>([]);
  const { setParty, setOpponentParty } = useContext(GamplayContext);
  const [player] = useContext(PlayerContext);

  useEffect(() => {
    setIsLoading(true);
    getPokemonList().finally(() => setIsLoading(false));
  }, []);

  async function getPokemonList() {
    const response = await fetchPokemonList();
    setPokemonList(response.data);
  }
  function choosePokemon(ndex: Pokemon['ndex']) {
    const updatedChoosen = find(equals(ndex))(choosen)
      ? without([ndex], choosen)
      : append(ndex, choosen);
    setChoosen(updatedChoosen);
  }

  function ready() {
    if (!player) return;
    emitSelectParty(choosen);
    const sRoundStarted = subscribeRoundStarted(battleState => {
      setIsWaitingOpponent(false);
      sRoundStarted.off();
      const { playerData, opponentData } = helper.splitPlayer(player, battleState);
      setParty(playerData.party);
      setOpponentParty(opponentData.party);
      onFinish();
    });
  }

  function onConfirmParty() {
    const { length } = choosen;
    if (length === 0) {
      alert('Please select pokemon for your party!');
      return;
    } else if (length < 3) {
      const confirm = window.confirm(
        `You only selected ${length} pokemon for your party. Are you sure?`
      );
      if (!confirm) return;
    }
    ready();
  }

  return isLoading
    ? <LoadingIndicator />
    : isWaitingOpponent
      ? <div>waiting for opponent</div>
      : (
        <div>
          <h5>Choose your Pokémon</h5>
          <TileContainer>
            {pokemonList.map(({ ndex, image, name, types }) => (
              <Tile
                chosen={choosen.includes(ndex)}
                onClick={() => choosePokemon(ndex)}
                key={ndex}
              >
                <img src={image} alt={name} />
                <TileDetail>
                  <div>{name}</div>
                  <div>{types}</div>
                </TileDetail>
              </Tile>
            ))}
          </TileContainer>
          <Button onClick={onConfirmParty}>Battle!</Button>
        </div>
      );
}