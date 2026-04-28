import {useEffect, useState} from "react";
import {DiaryContext} from "./DiaryContext.ts";
import {useDiaries} from "../../hooks/useDiaries.ts";
import {type DiaryType} from "../../schema/diary/diarySchema.ts";

export const DiaryProvider = ({children}: { children: React.ReactNode }) => {

    const [diary, setDiary] = useState<DiaryType[]>([])
    const {getDiaries} = useDiaries()

    const fetchDiaries = async () => {
        const diaries = await getDiaries()
        setDiary(diaries)
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchDiaries()
    }, [])

    return <DiaryContext.Provider value={{
        diary,
        refetchDiaries: fetchDiaries
    }}>
        {children}
    </DiaryContext.Provider>
}