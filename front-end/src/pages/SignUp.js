import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { AuthPage } from '../styles/AuthPage';
import axios from 'axios';

const SignUp = () => {
	const [disabled, setDisabled] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setDisabled(true);
		
		if (password !== passwordConfirm){
			setDisabled(false);
			return alert('Digite a mesma senha nos dois campos!');
		}

		const user = {
			name,
			email,
			password,
		};

		axios.post('http://localhost:4000/auth/signup', user).then(res => {
			history.push('/');
		}).catch(err => {
			alert("Erro! Tente novamente!");
		});
		setDisabled(false);
	};

	return (
		<AuthPage>
			<h1 className="logo">MyWallet</h1>
			<Form onSubmit={handleSubmit} disabled={disabled}>
				<Input
					required
					placeholder="Nome"
					value={name}
					setValue={setName}
				/>
				<Input
					type="email"
					required
					placeholder="E-mail"
					value={email}
					setValue={setEmail}
				/>
				<Input
					type="password"
					minLength="6"
					required
					placeholder="Senha"
					value={password}
					setValue={setPassword}
				/>
				<Input
					type="password"
					minLength="6"
					required
					placeholder="Confirme a senha"
					value={passwordConfirm}
					setValue={setPasswordConfirm}
				/>
				<SubmitButton>Cadastrar</SubmitButton>
			</Form>
			<p>
				Já tem uma conta? <Link to="/">Entre agora!</Link>
			</p>
		</AuthPage>
	);
};

export { SignUp };
