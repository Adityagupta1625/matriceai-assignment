import { TextFieldProps } from '@/types';

export default function TextField(props: TextFieldProps) {
  const handleChange = (e: any) => {
    props.setValue(e.target.value);
  };

  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}
      className={`${props.className}`}
    />
  );
}