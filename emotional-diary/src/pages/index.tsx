import {useState} from "react";
import {useNavigate} from "react-router";
import dayjs from "dayjs";
import Button from "../components/buttons/Button.tsx";
import HomeHeader from "../components/headers/HomeHeader.tsx";
import PageContainer from "../components/layout/PageContainer.tsx";
import DiaryItem from "../components/diary/DiaryItem.tsx";
import {useDiaryData} from "../hooks/useDiaryData.ts";
import {formatDate} from "../utils/dateUtils.ts";

export default function Index() {

    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const [order, setOrder] = useState<'newest' | 'oldest'>('newest');
    const {orderedDiary} = useDiaryData({date, order})

    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setOrder(value as 'newest' | 'oldest');
    }

    const handleNextMonth = () => {
        setDate(dayjs(date).add(1, 'month').toDate());
    }

    const handlePrevMonth = () => {
        setDate(dayjs(date).subtract(1, 'month').toDate());
    }

    const handleWriteClick = () => {
        navigate('/write');
    }

    const formattedDate = formatDate(date, 'YYYY. MM. DD')

    return (
        <PageContainer>
            <HomeHeader date={formattedDate} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth}/>
            <div className="flex items-center mt-2 gap-2 px-2">
                <select className="py-2 px-1 text-sm border border-gray-400 rounded cursor-pointer" value={order}
                        onChange={handleOrderChange}>
                    <option value="newest">최신순</option>
                    <option value="oldest">오랜된순</option>
                </select>
                <Button label="새 일기 쓰기" fullWidth onClick={handleWriteClick}/>
            </div>
            {orderedDiary.length === 0 ?
                (<div className="text-center text-gray-500 mt-4">작성된 일기가 없습니다.</div>) : (
                orderedDiary.map((d) => (
                    <DiaryItem diaryItem={d} key={d.id}/>
                ))
            )}
        </PageContainer>
    )
}