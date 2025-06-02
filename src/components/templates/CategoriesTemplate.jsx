import React, { useState } from 'react'
import styled from 'styled-components'
import { Btn1, RegisterCategories, Searcher, TablaCategorias, Title, useCategoriesStore } from '../../index';
import { v } from '../../styles/variables'
import { ConfettiExplosion } from 'react-confetti-explosion';

const CategoriesTemplate = () => {
  const [openRegistration, setOpenRegistration] = useState(false);
  const [action, setAction] = useState('');
  const [dataSelect, setDataSelect] = useState([]);
  const { datacategories, setSearcher } = useCategoriesStore();
  const [isExploding, setIsExploding] = React.useState(false);

  const newRegistration = () => {
    setOpenRegistration(!openRegistration)
    setAction("New")
    setDataSelect([])
    setIsExploding(false)
  }

  return (
    <Container>
      {
        openRegistration && (
          <RegisterCategories
            onClose={() => setOpenRegistration(!openRegistration)}
            dataSelect={dataSelect}
            accion={action}
            setIsExploding={setIsExploding}
          />
        )
      }

      <section className='area1'>
        <Title>Categorias</Title>
        <Btn1
          title={'nuevo'}
          funcion={newRegistration}
          bgcolor={v?.colorPrincipal}
          icono={<v.iconoagregar />} />
      </section>

      <section className='area2'>
        <Searcher setInput={setSearcher} placeholder='Buscar categoria' />
      </section>

      <section className='main'>
        {
          isExploding && <ConfettiExplosion />
        }
        <TablaCategorias
          data={datacategories}
          setAction={setAction}
          setOpenRegistration={setOpenRegistration}
          setDataSelect={setDataSelect} />
      </section>

    </Container>
  )
}
const Container = styled.div`
  height: calc(100vh - 30px);
  padding: 15px;
  margin: 5%;
  display: grid;
  grid-template:
  "area1" 60px
  "area2" 60px
  "main" auto;
  gap: 20px;

  .area1{ 
    grid-template:area1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
  }
  .area2{ 
    grid-template:area2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .main{ 
    grid-template:main;
  }

`;
export default CategoriesTemplate