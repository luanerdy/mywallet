import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { AuthPage } from '../styles/AuthPage';

const SignUp = () => {
	const [disabled, setDisabled] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const handleSubmit = () => {
		setDisabled(true);
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
					required
					placeholder="Senha"
					value={password}
					setValue={setPassword}
				/>
				<Input
					type="password"
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
