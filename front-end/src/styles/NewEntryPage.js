import styled from "styled-components";

const NewEntryPage = styled.div`
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
    align-items: center;

    .title {
        font: 700 26px 'Railway', sans-serif;
    }

    > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    form {
        margin: 40px 0;
    }

    a {
        font-size: 24px;
    }
`;

export { NewEntryPage };
