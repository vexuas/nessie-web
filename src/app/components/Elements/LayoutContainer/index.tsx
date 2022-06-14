import { ReactNode } from 'react';
import styles from './LayoutContainer.module.scss';

interface Props {
  children: ReactNode;
}
export default function LayoutContainer({ children }: Props) {
  return <div className={styles.Container}>{children}</div>;
}
