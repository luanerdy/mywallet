import styled from "styled-components";

const StyledOptionButton = styled.div`
    display: flex;
    padding: 10px;
    width: 47%;
    height: 110px;
    margin: 15px 0 0;
    border-radius: 5px;
    cursor: pointer;

    background: #A328D6;
    color: white;

    > div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        width: 70px;
    }

    .icon {
        font-size: 25px;
    }
`;

export { StyledOptionButton };
