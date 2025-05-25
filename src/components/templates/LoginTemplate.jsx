import styled from 'styled-components';
import { Btnsave, Footer, InputText2, Linea, Title } from '../../index';
import { v } from '../../styles/variables'
import { Device } from '../../styles/breakpoints'

const LoginTemplate = () => {
    return (
        <Container>
            <div className='card'>
                <Title $paddingbotton='20px'>INGRESAR</Title>
                <form >
                    <InputText2>
                        <input className='form__field' placeholder='Mail' type='text' />
                    </InputText2>

                    <InputText2>
                        <input className='form__field' placeholder='Contraseña' type='password' />
                    </InputText2>

                    <Btnsave titulo='INGRESAR' bgcolor='#1CB0F6' color='255, 255, 255' width='100%' />
                </form>

                <Linea >
                    <span>0</span>
                </Linea>

                <Btnsave titulo='Google' bgcolor='#fff' icono={<v.iconogoogle />} width='100%' />
            </div>
            <Footer />
        </Container>
    )
}
const Container = styled.div`
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 20px;
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
export default LoginTemplate