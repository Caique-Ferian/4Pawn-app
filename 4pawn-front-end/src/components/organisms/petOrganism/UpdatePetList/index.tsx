import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Container from '@atoms/Container';
import LinkButton from '@molecules/LinkButton';
import SelectUpdateType from '@molecules/SelectUpdateType';
import UpdatePetAdoptedForm from '../UpdatePetAdoptedForm';

const UpdatePetList: React.FC = () => {
  const { cards, patch,get } = useContext(AppContext) as AppContextType;
  const [type,setType] = useState<string>('age');

  const onChange = async (i: number,id:string) => {
    await patch('pets/patch/adopted',{ id,adopted: !cards[i].adopted });
  }

  useEffect(() => {
    const fetch = async () => await get('pets');
    fetch();
  },[patch,get])
  return(
    <Container className="list-pets-container">
      <SelectUpdateType setType={setType}/>
      {cards.map((card,index) => (
      <Container className="cards-container">
        <LinkButton 
          key={index}
          petId={card.id}
          content={card.name}
          disabled= {type === 'adopted'}
          target={`/admin/update/${type}`}/>
        {type === 'adopted' && (
        <UpdatePetAdoptedForm 
          checked={card.adopted}
          onChange={() => onChange(index,card.id)}
        />)}
      </Container>))}
    </Container>
  );
}

export default UpdatePetList;