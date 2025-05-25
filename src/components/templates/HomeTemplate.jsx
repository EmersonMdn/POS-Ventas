import styled from "styled-components"
import { useAuthStore } from "../../store/AuthStore";
import { UserAuth } from "../../context/AuthContext";

const HomeTemplate = () => {
    const { signOut } = useAuthStore()
    const { user } = UserAuth();
    return (
        <Container>
            <span> Home Template</span>
            <button onClick={signOut}>Cerrar session</button>
            <span> {user?.user_metadata?.name}</span>
        </Container>
    )
}
const Container = styled.div`
    height: 100vh;

`;

export default HomeTemplate