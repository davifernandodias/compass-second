interface InputProps {
  className: string;
  placeholder: string;
  type: string;
}
export default function Input({ className, placeholder, type }: InputProps) {
  return <input className={className} placeholder={placeholder} type={type} />;
}
