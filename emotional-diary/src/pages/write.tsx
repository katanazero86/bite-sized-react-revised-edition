import {useEffect, useRef, useState} from "react";
import {Navigate, useNavigate, useParams} from "react-router";
import WriteHeader from "../components/headers/WriteHeader.tsx";
import EmotionButtonGroup from "../components/buttons/group/EmotionButtonGroup.tsx";
import Button from "../components/buttons/Button.tsx";
import PageContainer from "../components/layout/PageContainer.tsx";
import {nanoid} from "nanoid";
import {useDiary} from "../context/diary/DiaryContext.ts";
import EditHeader from "../components/headers/EditHeader.tsx";
import {Diary} from "../schema/diary/diarySchema.ts";
import {useDiariesMutations} from "../hooks/useDiariesMutations.ts";
import dayjs from "dayjs";
import {formatDate, KST_TIMEZONE} from "../utils/dateUtils.ts";

type WriteProps = {
    isEdit?: boolean
}

export default function Write({isEdit = false}: WriteProps) {

    const {id} = useParams()
    const navigation = useNavigate();
    const {diary} = useDiary()
    const {createDiaries, updateDiaries} = useDiariesMutations()
    const targetDiary = diary.find(d => d.id === id)

    const [date, setDate] = useState(isEdit ? targetDiary?.createdAt ?? new Date().toISOString() : new Date().toISOString());
    const [selectedEmotion, setSelectedEmotion] = useState<'veryGood' | 'good' | 'normal' | 'bad' | 'veryBad'>(isEdit ? targetDiary?.emotion ?? 'normal' : 'normal');
    const contentRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.value = isEdit ? targetDiary?.content ?? '' : ''
        }
    }, [isEdit, targetDiary])

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const kstDate = dayjs.tz(e.target.value, KST_TIMEZONE);
        setDate(kstDate.toISOString());
    }

    const handleEmotionChange = (emotion: 'veryGood' | 'good' | 'normal' | 'bad' | 'veryBad') => {
        setSelectedEmotion(emotion);
    }

    const handleWriteClick = async () => {

        const form = {
            id: isEdit ? id! : nanoid(),
            content: contentRef.current?.value.trim() ?? '',
            createdAt: date,
            emotion: selectedEmotion
        }

        const result = Diary.safeParse(form)
        if (!result.success) {
            alert('일기 작성에 실패했습니다.')
            console.error(result.error)
            return
        } else {
            if (isEdit) {
                await updateDiaries(form)
            } else {
                await createDiaries(form)
            }
            navigation('/')
        }

    }

    const handleCancelClick = () => {
        navigation(-1)
    }

    if (isEdit && !targetDiary) return <Navigate to="/" replace/>;

    return (
        <PageContainer>
            {isEdit ? <EditHeader/> : <WriteHeader/>}
            <div className="mt-4">
                <p className="text-sm mb-2">오늘의 날짜</p>
                <input type="date"
                       className="w-full border border-gray-400 rounded p-2 outline-none focus:border-gray-600 text-sm"
                       max={dayjs().tz(KST_TIMEZONE).format('YYYY-MM-DD')}
                       value={formatDate(new Date(date))} onChange={handleDateChange}/>
            </div>

            <div className="mt-4">
                <p className="text-sm mb-2">오늘의 감정</p>
                <EmotionButtonGroup todayEmotion={selectedEmotion} onChange={handleEmotionChange}/>
            </div>

            <div className="mt-4">
                <p className="text-sm mb-2">오늘의 일기</p>
                <textarea
                    className="w-full border border-gray-400 rounded p-2 outline-none focus:border-gray-600 text-sm resize-none"
                    rows={5} ref={contentRef}/>
            </div>

            <footer className="flex justify-between mt-4 items-center">
                <Button label="취소하기" onClick={handleCancelClick}/>
                <Button label="작성 완료" onClick={handleWriteClick}/>
            </footer>
        </PageContainer>
    )
}