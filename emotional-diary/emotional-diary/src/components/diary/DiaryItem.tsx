import dayjs from "dayjs";
import Button from "../buttons/Button.tsx";
import VeryBadIcon from "../icons/VeryBadIcon.tsx";
import BadIcon from "../icons/BadIcon.tsx";
import NormalIcon from "../icons/NormalIcon.tsx";
import GoodIcon from "../icons/GoodIcon.tsx";
import VeryGoodIcon from "../icons/VeryGoodIcon.tsx";
import {useNavigate} from "react-router";

type DiaryItem = {
    id: string
    content: string
    emotion: 'veryGood' | 'good' | 'normal' | 'bad' | 'veryBad'
    createdAt: Date
}

type DiaryItemProps = {
    diaryItem: DiaryItem
}

export default function DiaryItem({diaryItem}: DiaryItemProps) {

    const emotionIcons = {
        'veryGood': <VeryGoodIcon size={36}/>,
        'good': <GoodIcon size={36}/>,
        'normal': <NormalIcon size={36}/>,
        'bad': <BadIcon size={36}/>,
        'veryBad': <VeryBadIcon size={36}/>,
    };

    const navigate = useNavigate();

    const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        navigate(`/edit/${diaryItem.id}`)
    }

    const handleDetailClick = () => {
        navigate(`/detail/${diaryItem.id}`)
    }

    return (
        <div className="mt-4 flex items-center gap-2 hover:bg-gray-200 rounded p-2" onClick={handleDetailClick}>
            <div className="flex justify-center px-2">
                {emotionIcons[diaryItem.emotion]}
            </div>
            <div className="flex flex-col gap-1 grow text-sm min-w-0">
                <p className="font-semibold italic">{dayjs(diaryItem.createdAt).format('YYYY. MM. DD')}</p>
                <p className="truncate">{diaryItem.content}</p>
            </div>
            <div className="w-24 shrink-0">
                <Button label="수정하기" onClick={handleEditClick} fullWidth/>
            </div>
        </div>
    )
}