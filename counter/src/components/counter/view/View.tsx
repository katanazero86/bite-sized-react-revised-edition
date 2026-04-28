type ViewProps = {
    count: number
}

export default function View({count}: ViewProps) {
    return (
        <div className="p-2 bg-gray-100 mt-4">
            <p className="text-gray-800 text-sm">현재 카운트:</p>
            <p className="text-gray-800 text-sm mt-2">{count}</p>
        </div>
    )
}