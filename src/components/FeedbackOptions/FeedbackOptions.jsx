import { Button, FeedbackContainer } from './FeedbackOptions.styled';
import {PropTypes} from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) =>  (
		<FeedbackContainer>
			{options.map(option =>  (
					<Button
						key={option}
						type="button"
						name={option}
						onClick={onLeaveFeedback}
					>
						{option}
					</Button>
				)
			)}
		</FeedbackContainer>
	);

FeedbackOptions.propTypes = {
	options: PropTypes.array,
	onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;
