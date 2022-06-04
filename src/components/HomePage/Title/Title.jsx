import PropTypes from 'prop-types';
import s from './Title.module.css';

export default function Title({text}) {
    return <h1 className={s.title}>{text}</h1>
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
}