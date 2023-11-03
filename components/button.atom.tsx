interface ButtonAtomProps {
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonAtom({ onClick, text }: ButtonAtomProps) {
  return <button
    className='w-20 h-10 border-0 rounded-lg px-2 bg-blue-500 hover:bg-blue-400'
    onClick={onClick}
  >
    <p className='text-white'>{text}</p>
  </button>;
}