type ControllerProps = {
    onClick: (num: number) => void
}

const BUTTON_CLASS = 'bg-white rounded px-4 py-2 border border-indigo-600 text-blue-600 cursor-pointer';

export default function Controller2({onClick}: ControllerProps) {

    const handleClick = (num: number) => () => {
        onClick(num)
    }

    return (
        <div className="flex mt-4 gap-2">
            <button className={BUTTON_CLASS} onClick={handleClick(-1)}>-1</button>
            <button className={BUTTON_CLASS} onClick={handleClick(-10)}>-10</button>
            <button className={BUTTON_CLASS} onClick={handleClick(-100)}>-100</button>
            <button className={BUTTON_CLASS} onClick={handleClick(100)}>+100</button>
            <button className={BUTTON_CLASS} onClick={handleClick(10)}>+10</button>
            <button className={BUTTON_CLASS} onClick={handleClick(1)}>+1</button>
        </div>
    )
}