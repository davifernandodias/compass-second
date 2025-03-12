interface InputProps {
  className: string;
  placeholder: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any
}
export default function Input({ className, placeholder, type }: InputProps) {
  return <input className={className} placeholder={placeholder} type={type} />;
}
