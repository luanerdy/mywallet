import { MyEntriesPage } from '../styles/MyEntriesPage';
import { OptionButton } from '../components/OptionButton';
import {Entries} from '../components/Entries';
import { BiLogOut } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const MyEntries = () => {
	const history = useHistory();

	const entries = [
		{
			value: 3990,
			description: 'Almoço mãe',
			date: '2021-06-20',
			type: 'outflow',
		},
		{
			value: 5990,
			description: 'Salário',
			date: '2021-06-21',
			type: 'income',
		},
		{
			value: 8000,
			description: 'Salário',
			date: '2021-06-22',
			type: 'income',
		},
	];

	return (
		<MyEntriesPage>
			<div className="subdiv">
				<h2 className="welcome">Olá, Luan</h2>
				<BiLogOut className="logout" />
			</div>
			<Entries entries={entries} />
			<div className="subdiv">
				<OptionButton
					icon={<AiOutlinePlusCircle className="icon" />}
					text="Nova entrada"
					onClick={() => history.push('/entrada')}
				/>
				<OptionButton
					icon={<AiOutlineMinusCircle className="icon" />}
					text="Nova saída"
					onClick={() => history.push('/saida')}
				/>
			</div>
		</MyEntriesPage>
	);
};

export { MyEntries };
