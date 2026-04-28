import GoodIcon from "../icons/GoodIcon.tsx";
import BadIcon from "../icons/BadIcon.tsx";
import NormalIcon from "../icons/NormalIcon.tsx";
import VeryGoodIcon from "../icons/VeryGoodIcon.tsx";
import VeryBadIcon from "../icons/VeryBadIcon.tsx";

type EmotionCardProps = {
    emotion: 'good' | 'bad' | 'normal' | 'veryGood' | 'veryBad'
}

const ICON_SIZE = 50;

export default function EmotionCard({emotion}: EmotionCardProps) {

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
        <div className="rounded border border-gray-400 max-w-50 p-2 flex flex-col items-center bg-gray-50">
            {emotionIcon[emotion]}
            <p className="font-semibold text-sm mt-2">{emotionText[emotion]}</p>
        </div>
    )
}