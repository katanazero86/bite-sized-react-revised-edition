import {createContext, useContext } from "react";
import type {DiaryType} from "../../schema/diary/diarySchema.ts";

export const DiaryContext = createContext<null | {
    diary: DiaryType[],
    refetchDiaries: () => Promise<void>
    // setDiary: React.Dispatch<React.SetStateAction<typeof diaryMock>>
}>(null);


export const useDiary = () => {
    const context = useContext(DiaryContext);
    if (context === null) {
        throw new Error("useDiary must be used within a DiaryProvider");
    }

    return context;
};