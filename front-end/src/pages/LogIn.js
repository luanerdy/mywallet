import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { AuthPage } from '../styles/AuthPage';

const LogIn = () => {
	const [disabled, setDisabled] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = () => {
		setDisabled(true);
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
