import { MyEntriesPage } from '../styles/MyEntriesPage';
import { OptionButton } from '../components/OptionButton';
import { Entries } from '../components/Entries';
import { BiLogOut } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const MyEntries = () => {
	const history = useHistory();
	const [data, setData] = useState({ total: 0, entries: [] });
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		if(!user) return history.push('/');

		const config = {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		};

		axios
			.get('http://localhost:4000/entries', config)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
			});
	}, [user]);

	const logout = () => {
		const config = {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		};

		axios
			.post('http://localhost:4000/auth/logout', [], config)
			.then((res) => {
				setUser(undefined);
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
			});
	};

	return (
		<MyEntriesPage>
			<div className="subdiv">
				<h2 className="welcome">Olá, {user?.name}</h2>
				<BiLogOut className="logout" onClick={logout} />
			</div>
			<Entries data={data} />
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
