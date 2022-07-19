import React from 'react';
import { Container, List, Item } from './Statistics.styled';
import {PropTypes} from 'prop-types'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>  (
			<Container>
				<List>
					<Item>Добрий: {good}</Item>
					<Item>Помірний: {neutral}</Item>
					<Item>Поганий: {bad}</Item>
					<Item>Кількість відгуків: {total}</Item>
					{positivePercentage ? (
						<Item>
							Відсоток позитивних відгуків: {positivePercentage}%
						</Item>
					) : (
						<Item>Відсоток позитивних відгуків: 0%</Item>
					)}
				</List>
			</Container>
		);

Statistics.propTypes = {
	good: PropTypes.number,
	neutral: PropTypes.number,
	bad: PropTypes.number,
	total: PropTypes.number,
	positivePercentage: PropTypes.number,
}

export default Statistics;
