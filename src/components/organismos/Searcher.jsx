import styled from "styled-components";
import { v } from '../../styles/variables';

const Searcher = ({ setInput, placeholder }) => {
  const search = (e) => {
    setInput(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchIcon>
        <v.iconSearch />
      </SearchIcon>
      <SearchInput 
        type="text" 
        onChange={search} 
        placeholder={placeholder}
      />
      <ClearButton onClick={() => setInput('')}>
        <v.iconClose />
      </ClearButton>
    </SearchContainer>
  );
};

// Estilos modernizados
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.bg};
  border: 2px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 16px;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  padding: 0 16px 0 44px;
  font-size: 0.95rem;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
    opacity: 0.7;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.text};
    transform: scale(1.1);
  }

  svg {
    font-size: 16px;
  }
`;

export default Searcher;