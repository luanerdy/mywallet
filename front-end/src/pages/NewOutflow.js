import { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { NewEntryPage } from '../styles/NewEntryPage';
import { BiArrowBack } from 'react-icons/bi';
import { UserContext } from '../contexts/UserContext';

const NewOutflow = () => {
	const [disabled, setDisabled] = useState(false);
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');
	const history = useHistory();
	const { user } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setDisabled(true);

		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		};

		const data = {
			value,
			description,
		};

		axios
			.post('http://localhost:4000/entries/outflow', data, config)
			.then((res) => {
				history.push('/registros');
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
			});
		setDisabled(false);
	};

	return (
		<NewEntryPage>
			<div>
				<h2 className="title">Nova saída</h2>
				<Link to="/registros">
					<BiArrowBack />
				</Link>
			</div>
			<Form onSubmit={handleSubmit} disabled={disabled}>
				<Input
					required
					type="number"
					placeholder="Valor"
					value={value}
					setValue={setValue}
				/>
				<Input
					required
					placeholder="Descrição"
					value={description}
					setValue={setDescription}
				/>
				<SubmitButton>Salvar saída</SubmitButton>
			</Form>
		</NewEntryPage>
	);
};

export { NewOutflow };
