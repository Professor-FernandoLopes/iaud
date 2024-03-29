import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
    padding: 32px 0;
    background: black;
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    > img {
        height: 150px;
    }

    button {
        margin-left: auto;
        background: transparent;
        border: 0;

        svg {
            color: #999591;
            width: 20px;
            height: 20px;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 80px;

    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            color: #f4edeB;
        }

        a {
            text-decoration: none;
            color: #DAA520;

            &:hover{
                opacity: 0.8;
            }
        }
    }
`;

export const Content = styled.main`
    max-width: 1120px;
    margin: 64px auto;
    display: flex;
`;



export const Exchange = styled.div`
    margin-top: 10px;

   
        img {
            width: 700px;
            height: 200px;
            
        }

       


    }
`;




