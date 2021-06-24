import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { AuthPage } from '../styles/AuthPage';
import axios from 'axios';

const LogIn = ({ setUser }) => {
	const [disabled, setDisabled] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setDisabled(true);

		const data = {
			email,
			password,
		};

		axios
			.post('http://localhost:4000/auth/login', data)
			.then((res) => {
				setUser(res.data);
				history.push('/registros');
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
			});
		setDisabled(false);
	};

	return (
		<AuthPage>
			<h1 className="logo">MyWallet</h1>
			<Form onSubmit={handleSubmit} disabled={disabled}>
				<Input
					type="email"
					required
					placeholder="E-mail"
					value={email}
					setValue={setEmail}
				/>
				<Input
					type="password"
					required
					placeholder="Senha"
					value={password}
					setValue={setPassword}
				/>
				<SubmitButton>Entrar</SubmitButton>
			</Form>
			<p>
				Primeira vez? <Link to="/cadastro">Cadastre-se!</Link>
			</p>
		</AuthPage>
	);
};

export { LogIn };
