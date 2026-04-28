import GoodIcon from "../icons/GoodIcon.tsx";
import BadIcon from "../icons/BadIcon.tsx";
import NormalIcon from "../icons/NormalIcon.tsx";
import VeryGoodIcon from "../icons/VeryGoodIcon.tsx";
import VeryBadIcon from "../icons/VeryBadIcon.tsx";

type EmotionCardProps = {
    emotion: 'good' | 'bad' | 'normal' | 'veryGood' | 'veryBad'
    onClick: (emotion: 'good' | 'bad' | 'normal' | 'veryGood' | 'veryBad') => void
    disabled?: boolean
}

const ICON_SIZE = 28;

export default function EmotionButton({emotion, onClick, disabled = false}: EmotionCardProps) {

    const emotionText = {
        good: '좋음',
        bad: '나쁨',
        normal: '보통',
        veryGood: '매우 좋음',
        veryBad: '매우 나쁨'
    }

    const emotionIcon = {
        good: <GoodIcon size={ICON_SIZE}/>,
        bad: <BadIcon size={ICON_SIZE}/>,
        normal: <NormalIcon size={ICON_SIZE}/>,
        veryGood: <VeryGoodIcon size={ICON_SIZE}/>,
        veryBad: <VeryBadIcon size={ICON_SIZE}/>
    }

    return (
        <button
            className="rounded border border-gray-400 py-2 px-4 flex flex-col items-center bg-gray-50 cursor-pointer hover:bg-gray-200 max-w-25 w-full disabled:opacity-50"
            disabled={disabled}
            onClick={() => onClick(emotion)}>
            {emotionIcon[emotion]}
            <p className="font-semibold text-sm mt-2">{emotionText[emotion]}</p>
        </button>
    )
}