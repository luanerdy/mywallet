import { StyledEntries } from './styles';
import { Entry } from './Entry';
import { useEffect, useState } from 'react';

const Entries = ({ entries }) => {
	const [saldo, setSaldo] = useState(0);
	useEffect(() => {
		const value =
			entries.reduce(
				(acc, cur) =>
					cur.type === 'income' ? acc + cur.value : acc - cur.value,
				0
			) / 100;

		setSaldo(value);
	}, [entries]);

	return (
		<StyledEntries>
			{!entries[0] ? (
				<div
					style={{
						flex: 1,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: '#868686',
						fontSize: '20px',
						width: '180px',
						alignSelf: 'center',
						textAlign: 'center',
						lineHeight: '25px',
					}}
				>
					<p>Não há registros de entrada ou saída</p>
				</div>
			) : (
				<>
					<div>
						{entries.map((e, index) => (
							<Entry key={index} data={e} />
						))}
					</div>
					<div className="saldo">
						<span className="title">SALDO</span>
						<span
							style={{
								color: saldo >= 0 ? '#03AC00' : '#C70000',
							}}
						>
							{saldo
								.toFixed(2)
								.replace('.', ',')
								.replace('-', '')}
						</span>
					</div>
				</>
			)}
		</StyledEntries>
	);
};

export { Entries };
