import {createContext, useContext } from "react";
import type {diaryMock} from "../../mocks/diary-mock.ts";

export const DiaryContext = createContext<null | {
    diary: typeof diaryMock,
    setDiary: React.Dispatch<React.SetStateAction<typeof diaryMock>>
}>(null);


export const useDiary = () => {
    const context = useContext(DiaryContext);
    if (context === null) {
        throw new Error("useDiary must be used within a DiaryProvider");
    }

    return context;
};