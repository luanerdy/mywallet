import styled from "styled-components";

const MyEntriesPage = styled.div`
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
    align-items: center;

    .welcome {
        font: 700 26px 'Railway', sans-serif;
    }

    .subdiv {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    form {
        margin: 40px 0;
    }

    .logout {
        font-size: 24px;
    }
`;

export { MyEntriesPage };
