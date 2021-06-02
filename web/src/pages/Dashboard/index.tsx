import React from 'react';
//import { isToday, format, parseISO, isAfter } from 'date-fns';
//import ptBR from 'date-fns/locale/pt-BR';
//import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Text from './text';
// acrescentar embaixo do profile:
// <img src={user.avatar_url}
//alt=''
///>
import { FiPower,  } from 'react-icons/fi';
import {
    Container,
    Header,
    HeaderContent,
    Profile,
    Content,             
   
} from './styles';

import LogoImg from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';
//import api from '../../services/api';
import { Link } from 'react-router-dom';
//import Exchange from '../Exchange/index'




const Dashboard: React.FC = () => {
const { user, signOut } = useAuth();

       
   
return (
        <Container>
        <Header>
        <HeaderContent>
        <img src={LogoImg} alt="Go Barber"/>
          
        <Profile>
                    
        <div>
        <span>Bem-vindo,</span>
        <Link to="/profile">
        <strong>{ user.name }</strong>
        </Link>
        </div>
        </Profile>

        <button type="button" onClick={signOut}>
        <FiPower />
        </button>
        </HeaderContent>
        </Header>
        <Text/>
        <Content>
            
            <a href="http://criptam.criptam.com">  
            
            </a>
            
          </Content>
           </Container>
    );
};

export default Dashboard;
