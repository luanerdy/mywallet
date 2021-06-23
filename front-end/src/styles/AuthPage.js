import styled from "styled-components";

const AuthPage = styled.div`
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    .logo {
        font: 32px 'Saira Stencil One', sans-serif;
    }

    form {
        margin: 36px 0;
    }

    p {
        font-weight: 700;
    }
`;

export { AuthPage };
