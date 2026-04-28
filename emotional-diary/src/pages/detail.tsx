import {Navigate, useParams} from "react-router";
import PageContainer from "../components/layout/PageContainer.tsx";
import DetailHeader from "../components/headers/DetailHeader.tsx";
import {useDiary} from "../context/diary/DiaryContext.ts";
import VeryGoodIcon from "../components/icons/VeryGoodIcon.tsx";
import GoodIcon from "../components/icons/GoodIcon.tsx";
import NormalIcon from "../components/icons/NormalIcon.tsx";
import BadIcon from "../components/icons/BadIcon.tsx";
import VeryBadIcon from "../components/icons/VeryBadIcon.tsx";


export default function Detail() {

    const {id} = useParams();
    const {diary} = useDiary();
    const targetDiary = diary.find(d => d.id === id);

    if (!targetDiary) return <Navigate to="/" replace/>;

    const emotionIcons = {
        'veryGood': <VeryGoodIcon size={36}/>,
        'good': <GoodIcon size={36}/>,
        'normal': <NormalIcon size={36}/>,
        'bad': <BadIcon size={36}/>,
        'veryBad': <VeryBadIcon size={36}/>,
    };

    return (
        <PageContainer>
            <DetailHeader date={targetDiary.createdAt} />
            <p className="text-lg font-semibold text-center mt-4">
                오늘의 감정
            </p>
            <div className="flex justify-center mt-2">
                {emotionIcons[targetDiary.emotion]}
            </div>
            <p className="mt-4 font-semibold text-lg text-center">
                오늘의 일기
            </p>
            <div className="flex justify-center bg-gray-100 text-sm rounded px-2 py-5 mt-2">
                <p>
                    {targetDiary.content}
                </p>
            </div>
        </PageContainer>
    )
}