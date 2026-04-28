import {AppRouter} from "./router";
import {DiaryProvider} from "./context/diary/DiaryProvider.tsx";

export default function App() {
    return (
        <DiaryProvider>
            <AppRouter/>
        </DiaryProvider>
    )
}