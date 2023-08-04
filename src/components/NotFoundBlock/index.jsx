import React from 'react';
import styles from './NotFoundBlock.module.scss';
export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>😒</span>
      <br />
      <h1 className={styles.desc}>Ничего не найдено</h1>
    </div>
  );
};
