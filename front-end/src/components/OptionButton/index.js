import { StyledOptionButton } from './styles';

const OptionButton = (props) => {
    const {onClick, icon, text} = props;

	return (
		<StyledOptionButton onClick={onClick}>
			<div>
				{icon}
				<p>{text}</p>
			</div>
		</StyledOptionButton>
	);
};

export { OptionButton };
