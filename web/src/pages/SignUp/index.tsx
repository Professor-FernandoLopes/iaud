import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock,FiHome } from 'react-icons/fi';
import{FaCartPlus, FaAddressBook} from 'react-icons/fa'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidateErrors';

//import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, TextAnimation, Background } from './styles';


interface signUpFormData {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(
        async (data: signUpFormData) => {
            try {
                formRef.current?.setErrors({});
                const schema = Yup.object().shape({
                    name: Yup.string().required('Nome obrigatório'),
                    email: Yup.string()
                        .required('E-mail obrigatório')
                        .email('Digite um e-mail válido'),
                    password: Yup.string().min(6, 'No mínimo 6 digitos'),
                    quantidade: Yup.string().min(1, 'No mínimo 6 digitos'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await api.post('/users', data);

                history.push('/');

                addToast({
                    type: 'success',
                    title: 'Cadastro realizado!',
                    description: 'Você já pode fazer seu logon na Instruaud!',
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);

                    formRef.current?.setErrors(errors);

                    return;
                }

                addToast({
                    type: 'error',
                    title: 'Erro no cadastro',
                    description:
                        'Ocorreu um erro ao fazer cadastro, tente novamente',
                });
            }
        },
        [addToast, history],
    );

    return (
       // <>
        
        <Container>
        
       
        <Background/>
            
            <Content> 
            
            
                <AnimationContainer>
                    
                
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        

                        
                       
                        
                       
                        <Input 
                        name="quantidade" 
                        icon={FaCartPlus} 
                        placeholder="Quantidade de IAUD a reservar" 
                        />
                        <Input 
                        name="name" 
                        icon={FiUser} 
                        placeholder="Nome" 
                        />
                        
                        <Input
                            name="email"
                            icon={FiMail}
                            placeholder="E-mail"
                        />

                        <Input
                            name="password"
                            icon={FiLock}
                            type="password"
                            placeholder="Senha"
                        />

                        <Button type="submit">Cadastrar</Button>
                    </Form>

                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para logon
                    </Link>
                </AnimationContainer>
            </Content>
        </Container>
       // </>
    );
};

export default SignUp;
