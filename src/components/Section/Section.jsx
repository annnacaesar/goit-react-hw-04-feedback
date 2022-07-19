import React from 'react';
import { Title, SectionWrapper } from './Section.styled';
import {PropTypes} from 'prop-types'

const Section = ({title, children}) => (
		<SectionWrapper>
		<Title>{title}</Title>
		{children}
			</SectionWrapper>
	)

Section.propTypes = {
	title: PropTypes.string,
}

export default Section;