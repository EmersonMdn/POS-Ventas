import styled from "styled-components";
import { v } from '../../styles/variables';

const Searcher = ({ setInput, placeholder }) => {
    const search = (e) => {
        setInput(e.target.value);
    };
    return (
        <Container>
            <section className="content">
                <v.iconSearch className="icon" />
                <input placeholder={placeholder} onChange={search} />
            </section>
        </Container>
    );
};

const Container = styled.div`
    border-radius: 12px;
    height: 50px;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    border: 1.5px solid ${(props) => props.theme.inputDefaultColor};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: border-color 0.3s ease;

    .content {
        padding: 0 16px;
        display: flex;
        align-items: center;
        width: 100%;
        gap: 12px;

        .icon {
            font-size: 20px;
            color: ${(props) => props.theme.textSecondary || props.theme.text};
        }

        input {
            font-size: 16px;
            width: 100%;
            outline: none;
            background: transparent;
            border: none;
            color: ${(props) => props.theme.text};
            transition: all 0.3s ease;

            &::placeholder {
                color: ${(props) => props.theme.textSecondary || '#aaa'};
                opacity: 0.7;
            }

            &:focus {
                &::placeholder {
                    opacity: 0.4;
                }
            }
        }
    }

    &:hover {
        border-color: ${(props) => props.theme.primary || '#4096ff'};
    }
`;

export default Searcher;
