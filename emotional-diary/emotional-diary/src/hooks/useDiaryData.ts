import {useDiary} from "../context/diary/DiaryContext.ts";
import dayjs from "dayjs";
import {useMemo} from "react";

type DiaryData = {
    date: Date
    order: 'newest' | 'oldest'
}

export const useDiaryData = ({date, order}: DiaryData) => {
    const {diary} = useDiary()

    const filteredDiary = useMemo(() => {
        return diary.filter(d => dayjs(d.createdAt).isSame(date, 'month') && dayjs(d.createdAt).isSame(date, 'year'))
    }, [date, diary])

    const orderedDiary = useMemo(() => {
        if(filteredDiary.length === 0) return []
        return filteredDiary.toSorted((a, b) => {
            if (order === 'newest') {
                return dayjs(b.createdAt).diff(dayjs(a.createdAt));
            } else {
                return dayjs(a.createdAt).diff(dayjs(b.createdAt));
            }
        })
    }, [filteredDiary, order])

    return {diary, filteredDiary, orderedDiary}
};