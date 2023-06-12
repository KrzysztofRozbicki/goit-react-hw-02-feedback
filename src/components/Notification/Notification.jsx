import css from './notification.module.css';

export const Notification = ({ message }) => {
  return <p className={css.message}>{message}</p>;
};
