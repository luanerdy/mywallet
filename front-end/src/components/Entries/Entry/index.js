import { StyledEntry } from './styles';
import dayjs from 'dayjs';

const Entry = ({ data }) => {
	const { date, description, value, type } = data;

	return (
		<StyledEntry>
			<div>
				<span className="date">{dayjs(date).format('DD/MM')}</span>
				<span className="description">{description}</span>
			</div>
			<span style={{ color: type === 'income' ? '#03AC00' : '#C70000' }}>
				{(value / 100).toFixed(2).replace('.', ',')}
			</span>
		</StyledEntry>
	);
};

export { Entry };
