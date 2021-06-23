import styled from "styled-components";

const StyledEntries = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-flow: column nowrap;
    background: white;
    height: 100%;
    margin-top: 20px;
    border-radius: 5px;
    padding: 20px 12px 12px;
    color: black;

    .saldo {
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        font-weight: 500;

        .title {
            font-weight: 700;
        }
    }
`;

export {StyledEntries};
