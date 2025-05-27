import React from 'react'
import styled from 'styled-components'
import { Btn1, Searcher, Title } from '../../index';
import { v } from '../../styles/variables'

const CategoriesTemplate = () => {
  return (
    <Container>
      <section className='area1'>
        <Title>Categorias</Title>
        <Btn1
          title={'nuevo'}
          bgcolor={v?.colorPrincipal}
          icono={<v.iconoagregar />} />
      </section>

      <section className='area2'>
        <Searcher placeholder='Buscar categoria' />
      </section>

      <section className='main'>
        Main
      </section>

    </Container>
  )
}
const Container = styled.div`
  height: calc(100vh - 30px);
  padding: 15px;
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
    background-color: #554c553a;
  }

`;
export default CategoriesTemplate