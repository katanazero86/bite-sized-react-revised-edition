import Button from "../buttons/Button.tsx";
import ChevronLeftIcon from "../icons/ChevronLeftIcon.tsx";
import {useNavigate} from "react-router";

export default function WriteHeader() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }

    return (
        <header className="flex items-center gap-2 border-b-2 border-gray-200 p-4 relative">
            <Button label="뒤로 가기" leftIcon={<ChevronLeftIcon />} onClick={handleClick}/>
            <p className="text-sm font-semibold absolute left-1/2 transform -translate-x-1/2">새 일기 쓰기</p>
        </header>
    )
}