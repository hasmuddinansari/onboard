import { Form } from "containers/Form";
import LogoImage from 'template/images/logo.png'
import { Container, Logo, LogoContainer, MainContainer } from "./styled";

function App() {
    return (
        <MainContainer>
            <Container>

                <LogoContainer className="flex-justify-center">
                    <Logo src={LogoImage}/>
                </LogoContainer>

                <Form />
            </Container>
        </MainContainer>
    );
}

export default App;
