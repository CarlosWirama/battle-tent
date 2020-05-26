import React, { useState } from 'react';
import Pokemon from '../../../../types/Pokemon';
import { Button } from '../../../../components/basics';
import { BattleStep } from '../../enums';
import { sendChoosenParty } from '../../../../apis/socket/battleApi';
import { TileContainer, Tile, TileDetail } from './ChooseParty.styled';

export interface ChoosePartyProps {
  pokemonList: Pokemon[];
  setActiveStep: React.Dispatch<React.SetStateAction<BattleStep>>;
}

export default function ChooseParty({ pokemonList, setActiveStep }: ChoosePartyProps) {
  const [choosen, setChoosen] = useState<Array<Pokemon['ndex']>>([]);

  function selectUnselect(ndex: Pokemon['ndex']) {
    const updatedChoosen = choosen.find(oldNdex => oldNdex === ndex)
      ? choosen.filter(oldNdex => oldNdex !== ndex)
      : [...choosen, ndex];
    setChoosen(updatedChoosen);
  }

  async function onConfirmParty() {
    const response = await sendChoosenParty(choosen);
    if (response.error) {
      console.error(response.error);
      alert('and error occured!');
    }
    else setActiveStep(BattleStep.ChooseMoves);
  }

  return (
    <div>
      <h5>Choose your Pokémon</h5>
      <TileContainer>
        {pokemonList.map(({ ndex, image, name, types }) => (
          <Tile onClick={() => selectUnselect(ndex)} key={ndex}>
            <img src={image} alt={name} />
            <TileDetail>
              <div>
                {name}
              </div>
              <div>
                {types}
              </div>
            </TileDetail>
          </Tile>
        ))}
      </TileContainer>
      <Button onClick={onConfirmParty}>Battle</Button>
    </div>
  );
}
