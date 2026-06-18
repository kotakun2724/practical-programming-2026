import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Terminal({
  command,
  output,
  prompt = '$',
}) {
  const commandLines = String(command).split('\n');

  return (
    <div className={clsx('terminal', styles.terminal)}>
      <div className={styles.header}>
        <span className={clsx(styles.dot, styles.dotRed)} />
        <span className={clsx(styles.dot, styles.dotYellow)} />
        <span className={clsx(styles.dot, styles.dotGreen)} />
        <span className={styles.title}>terminal</span>
      </div>
      <div className={styles.body}>
        {commandLines.map((line, i) => (
          <div key={i} className={styles.line}>
            <span className={styles.prompt}>{prompt}</span>
            <span className={styles.command}>{line.length > 0 ? line : '\u00A0'}</span>
          </div>
        ))}
        {output !== undefined && output !== null && output !== '' && (
          <pre className={styles.output}>
            <code>{String(output).replace(/\n$/, '')}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
