import styles from './Button.module.scss';

interface Props {
  className?: string;
  label: string;
}

export default function Button({ className, label }: Props) {
  return (
    <button className={`${styles.Container} ${className}`}>
      <span>{label}</span>
    </button>
  );
}
