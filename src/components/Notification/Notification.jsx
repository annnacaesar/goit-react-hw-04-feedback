import { Notice } from './Notification.styled';
import {PropTypes} from 'prop-types'

const Notification = ({ notice }) => (<Notice>{notice}</Notice>);

Notification.propTypes = {
	notice: PropTypes.string,
}

export default Notification;
