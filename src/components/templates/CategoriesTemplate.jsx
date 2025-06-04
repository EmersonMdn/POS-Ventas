import React, { useState } from 'react';
import styled from 'styled-components';
import { Btn1, RegisterCategories, Searcher, TablaCategorias, Title, useCategoriesStore } from '../../index';
import { v } from '../../styles/variables';
import { ConfettiExplosion } from 'react-confetti-explosion';

const CategoriesTemplate = () => {
  const [openRegistration, setOpenRegistration] = useState(false);
  const [action, setAction] = useState('');
  const [dataSelect, setDataSelect] = useState([]);
  const { datacategories, setSearcher } = useCategoriesStore();
  const [isExploding, setIsExploding] = React.useState(false);

  const newRegistration = () => {
    setOpenRegistration(!openRegistration);
    setAction("New");
    setDataSelect([]);
    setIsExploding(false);
  };

  return (
    <Container>
      {openRegistration && (
        <RegisterCategories
          onClose={() => setOpenRegistration(!openRegistration)}
          dataSelect={dataSelect}
          accion={action}
          setIsExploding={setIsExploding}
        />
      )}

      {isExploding && <ConfettiContainer><ConfettiExplosion /></ConfettiContainer>}

      <Header>
        <PageTitle>
          <Title>Categorías</Title>
          <Actions>
            <Searcher
              setInput={setSearcher}
              placeholder='Buscar categoría...'
            />
            <AddButton
              title={'Nueva categoría'}
              funcion={newRegistration}
              bgcolor={v?.colorPrincipal}
              icono={<v.iconoagregar />}
            />
          </Actions>
        </PageTitle>
      </Header>

      <MainContent>
        <TablaCategorias
          data={datacategories}
          setAction={setAction}
          setOpenRegistration={setOpenRegistration}
          setDataSelect={setDataSelect}
        />
      </MainContent>
    </Container>
  );
};

// Estilos modernizados
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  background: ${({ theme }) => theme.bg};
  gap: 1.5rem;
  overflow: hidden;
`;

const ConfettiContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

// Estilo mejorado para el botón (puedes reemplazar tu Btn1 con este)
const AddButton = styled(Btn1)`
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  svg {
    font-size: 1.1rem;
  }
`;

export default CategoriesTemplate;