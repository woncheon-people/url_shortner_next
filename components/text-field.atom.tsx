interface TextFieldAtomProps {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function TextFieldAtom({ disabled = false, placeholder, value, onChange }: TextFieldAtomProps) {
  return (
    <input
      className='w-[25rem] h-10 border-0 rounded-lg px-2 disabled:bg-white'
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}