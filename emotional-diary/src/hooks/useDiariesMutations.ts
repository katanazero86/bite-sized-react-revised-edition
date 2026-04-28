import {useDiary} from "../context/diary/DiaryContext.ts";
import type {DiaryType} from "../schema/diary/diarySchema.ts";
import {apis} from "../apis";

export const useDiariesMutations = () => {

    const {refetchDiaries} = useDiary();

    const createDiaries = async (form: DiaryType) => {
        await apis.diariesApi.createDiaries(form)
        await refetchDiaries()
    }

    const updateDiaries = async (form: DiaryType) => {
        await apis.diariesApi.updateDiaries(form)
        await refetchDiaries()
    }

    const deleteDiaries = async (id: string) => {
        await apis.diariesApi.deleteDiaries(id)
        await refetchDiaries()
    }

    return {createDiaries, updateDiaries, deleteDiaries};
};