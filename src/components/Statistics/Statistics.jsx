import css from './statistics.module.css';

import { DynamicColor } from './calculateColor';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <h2>Statistics</h2>
      <p className={css.good}>
        good: <span className={css.number}> {good}</span>
      </p>
      <p className={css.neutral}>
        neutral: <span className={css.number}> {neutral}</span>
      </p>
      <p className={css.bad}>
        bad: <span className={css.number}> {bad}</span>
      </p>
      <p>
        total: <span className={css.total}> {total}</span>
      </p>
      <p>
        Good percentage: <DynamicColor percentage={positivePercentage} />
      </p>
    </div>
  );
};
