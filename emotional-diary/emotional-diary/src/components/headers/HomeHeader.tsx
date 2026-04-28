import Button from "../buttons/Button.tsx";
import ChevronLeftIcon from "../icons/ChevronLeftIcon.tsx";
import ChevronRightIcon from "../icons/ChevronRightIcon.tsx";

type HomeHeaderProps = {
    date: string
    onPrevMonth: () => void
    onNextMonth: () => void
}

export default function HomeHeader({date, onPrevMonth, onNextMonth}: HomeHeaderProps) {
    return (
        <header className="flex items-center gap-2 border-b-2 border-gray-200 p-4">
            <Button leftIcon={<ChevronLeftIcon/>} onClick={onPrevMonth}/>
            <p className="text-sm font-semibold flex-auto text-center">{date}</p>
            <Button leftIcon={<ChevronRightIcon/>} onClick={onNextMonth}/>
        </header>
    )
}