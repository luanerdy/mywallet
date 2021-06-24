import { StyledEntries } from './styles';
import { Entry } from './Entry';
import { useEffect, useState } from 'react';

const Entries = ({ data }) => {
	const [saldo, setSaldo] = useState(0);
	useEffect(() => {
		const value = data.total / 100;

		setSaldo(value);
	}, [data]);

	return (
		<StyledEntries>
			{!data.entries[0] ? (
				<div
					className="no-entries"
					style={{
						alignItems: 'center',
						fontSize: '20px',
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
						{data.entries.map((e, index) => (
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
