import {useDiary} from "../context/diary/DiaryContext.ts";
import type {DiaryType} from "../schema/diary/diarySchema.ts";

export const useDiaryMutations = () => {
    const {setDiary} = useDiary();

    const createDiary = (form: DiaryType) => {
        setDiary(prev => [...prev, form])
    }

    const editDiary = (form: DiaryType) => {
        setDiary(prev => prev.map(diaryItem => diaryItem.id === form.id ? form : diaryItem))
    }

    const deleteDiary = (id: string) => {
        setDiary(prev => prev.filter(diaryItem => diaryItem.id !== id));
    }

    return {createDiary, editDiary, deleteDiary};
};