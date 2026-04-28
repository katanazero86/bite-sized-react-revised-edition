type ButtonProps = {
    label?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    fullWidth?: boolean;
}

export default function Button({
                                   label = '',
                                   leftIcon,
                                   rightIcon,
                                   onClick,
                                   disabled = false,
                                   type = 'button',
                                   fullWidth
                               }: ButtonProps) {
    const baseClass = 'flex items-center justify-center gap-1 py-2 px-3 border-none outline-none rounded bg-indigo-500 text-white text-sm cursor-pointer';
    const fullWidthClass = fullWidth ? 'w-full' : '';

    return (
        <button className={`${baseClass} ${fullWidthClass}`} type={type} disabled={disabled}
                onClick={onClick}>{leftIcon}{label}{rightIcon}</button>
    )
}