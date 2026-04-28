export default function Header() {

    return (
        <div className="text-gray-800">
            <p className="text-sm font-semibold ">오늘은</p>
            <p className="text-lg mt-1">{new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date())}</p>
        </div>
    )
}