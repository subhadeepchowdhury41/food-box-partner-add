const Button = ({
    onClick,
    label
}: {
    onClick: React.MouseEventHandler,
    label: string
}) => {
    return (<button style={{
        cursor: 'pointer',
        padding: '0.7em 1.2em',
        border: 'none',
        fontSize: '12px',
        outline: 'none',
        color: 'white'
    }} className='bg-[#0073b0] rounded-sm hover:bg-blue-950 font-semibold'
      onClick={onClick}
    >{label}</button>);
}

export default Button;