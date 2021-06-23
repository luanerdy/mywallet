import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { NewEntryPage } from '../styles/NewEntryPage';
import { BiArrowBack } from 'react-icons/bi';

const NewIncome = () => {
	const [disabled, setDisabled] = useState(false);
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = () => {
		setDisabled(true);
		setDisabled(false);
	};

	return (
		<NewEntryPage>
			<div>
				<h2 className="title">Nova entrada</h2>
				<Link to="/registros">
					<BiArrowBack />
				</Link>
			</div>
			<Form onSubmit={handleSubmit} disabled={disabled}>
				<Input
					required
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
				<SubmitButton>Salvar entrada</SubmitButton>
			</Form>
		</NewEntryPage>
	);
};

export { NewIncome };
