import {useState} from "react";
import {DiaryContext} from "./DiaryContext.ts";
import {diaryMock} from "../../mocks/diary-mock.ts";

export const DiaryProvider = ({children}: { children: React.ReactNode }) => {

    const [diary, setDiary] = useState(diaryMock)

    return <DiaryContext.Provider value={{
        diary,
        setDiary
    }}>
        {children}
    </DiaryContext.Provider>
}