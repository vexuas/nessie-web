import styles from './Button.module.scss';

interface Props {
  className?: string;
  label: string;
  onClick?: () => void;
}

export default function Button({ className, label, onClick }: Props) {
  return (
    <button className={`${styles.Container} ${className}`} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
}
