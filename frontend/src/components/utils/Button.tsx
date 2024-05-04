import { ButtonProps } from '@/types';

export default function Button(props: ButtonProps) {
  return (
    <button className={`${props.className}`} onClick={props.onClick}>
      {props.name}
    </button>
  );
}