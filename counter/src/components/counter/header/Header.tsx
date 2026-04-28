type HeaderProps = {
    title?: string
}

export default function Header({title = 'Simple Counter'}: HeaderProps) {
    return (
        <h2 className="font-semibold text-gray-800 text-3xl">{title}</h2>
    )
}