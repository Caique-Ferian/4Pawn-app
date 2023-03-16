import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import Container from '@atoms/Container';
import LinkButton from '@molecules/LinkButton';
import SelectUpdateType from '@molecules/SelectUpdateType';
import UpdatePetAdoptedForm from '../UpdatePetAdoptedForm';
import Paragraph from '@atoms/Paragraph';

const UpdatePetList: React.FC = () => {
  const { cards, patch,get } = useContext(AppContext) as AppContextType;
  const [type,setType] = useState<string>('');

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
      {!type && <Paragraph content='Please select one type!'/>}
      {cards.map((card,index) => (
      <Container className="cards-container">
        <LinkButton 
          key={index}
          petId={card.id}
          content={card.name}
          disabled= {type === 'adopted' || !type}
          className="btn btn-dark"
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