import styled from 'styled-components';
import { Btn1, Footer, InputText2, Linea, Title, useAuthStore } from '../../index';
import { v } from '../../styles/variables'
import { Device } from '../../styles/breakpoints'

const LoginTemplate = () => {
    const { loginGoogle } = useAuthStore()
    return (
        <Container>
            <div className='card'>

                <ContentLogo>
                    <img src={v.logo} />
                    <span>ZendaPOS</span>
                </ContentLogo>

                <Title $paddingbotton='20px'>Ingresar</Title>
                <form >
                    <InputText2>
                        <input className='form__field' placeholder='Mail' type='text' />
                    </InputText2>

                    <InputText2>
                        <input className='form__field' placeholder='Contraseña' type='password' />
                    </InputText2>

                    <Btn1 titulo='INGRESAR' bgcolor='#1778f2' color='255, 255, 255' width='100%' />
                </form>

                <Linea >
                    <span>0</span>
                </Linea>

                <Btn1 funcion={loginGoogle} titulo='Google' bgcolor='#fff' icono={<v.iconogoogle />} width='100%' />
            </div>
            <Footer />
        </Container>
    )
}
const Container = styled.div`
    height:100vh;
    display: flex;
    color:${({ theme }) => theme.text};
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 20px;
    padding:0 10px ;
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
        margin: 20px;
        @media ${Device.tablet} {
            width: 400px;
        }
    }

`;

const ContentLogo = styled.section`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    span{
        font-weight: 700;
    }
    img{
        width: 10%;
    }
`;

export default LoginTemplate