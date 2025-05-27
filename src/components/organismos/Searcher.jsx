import styled from "styled-components"
import { v } from '../../styles/variables'

const Searcher = ({
    setInput,
    placeholder
}) => {
    const search = (e) => {
        setInput(e.target.value)
    }
    return (
        <Container>
            <section className="content">
                <v.iconSearch className="icon" />
                <input placeholder={placeholder} onChange={search} />
            </section>
        </Container>
    )
}

const Container = styled.div`
    border-radius: 10px;
    height: 50px;
    align-items: center;
    display: flex;
    color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => props.theme.inputDefaultColor};
    .content{
        padding: 15px;
        gap: 10px;
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        .icon{
            font-size: 18px;

        }
        input{
            font-size: 18px;
            width: 100%;
            outline: none;
            background: none;
            border: 0;
            color:${(props) => props.theme.text};
        }
    }
`;

export default Searcher
