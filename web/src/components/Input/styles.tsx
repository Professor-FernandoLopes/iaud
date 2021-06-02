import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: black;
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    border: 2px solid black;
    color: #DAA520;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }


    ${(props) =>
        props.isErrored &&
        css`
            border-color: #DAA520;
        `}


    ${(props) =>
        props.isFocused &&
        css`
            color: #DAA520;
            border-color: #DAA520;
        `}

    ${(props) =>
        props.isFilled &&
        css`
            color: #DAA520;
        `}
    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #DAA520;

        &::placeholder {
            color: #DAA520;
        }
    }

    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
    svg {
        margin: 0;
    }

    span {
        background: #DAA520;
        color: #DAA520;

        &::before {
            border-color: #DAA520 transparent;
        }
    }
`;
