import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { AppContainer } from './App.styled';

export class App extends Component {
	static propTypes = {};

	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	handleInkremet = event => {
		const { name } = event.currentTarget;

		this.setState(prevState => ({
			[name]: prevState[name] + 1,
		}));
		this.totalFeedback();
		this.percentageGoodFeedback();
	};

	hundleInkrementGood = () => {
		this.setState(prevState => {
			return {
				good: prevState.good + 1,
			};
		});
		this.totalFeedback();
		this.percentageGoodFeedback();
	};

	hundleInkrementNeutral = () => {
		this.setState(prevState => {
			return {
				neutral: prevState.neutral + 1,
			};
		});
		this.totalFeedback();
		this.percentageGoodFeedback();
	};

	hundleInkrementBad = () => {
		this.setState(prevState => {
			return {
				bad: prevState.bad + 1,
			};
		});
		this.totalFeedback();
		this.percentageGoodFeedback();
	};

	totalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};

	percentageGoodFeedback = () => {
		return parseInt((this.state.good / this.totalFeedback()) * 100);
	};
	render() {
		const { good, neutral, bad } = this.state;
		return (
			<AppContainer>
				<Section title="Залиште будь-ласка свій відгук">
					<FeedbackOptions
						options={['good', 'neutral', 'bad']}
						onLeaveFeedback={this.handleInkremet}
					/>
				</Section>

				<Section title="Статистика">
					{good !== 0 || neutral !== 0 || bad !== 0 ? (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={this.totalFeedback()}
							positivePercentage={this.percentageGoodFeedback()}
						/>
					) : (
						<Notification notice='Відгуків поки немає 🙄 '/>
					)}
				</Section>
			</AppContainer>
		);
	}
}
