import PropTypes from 'prop-types';
import style from './style.module.css';

function Notification ({ message }) {

    return (
      <div>
        <span className={style.notification}>{message}</span>
      </div>
    )

};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;