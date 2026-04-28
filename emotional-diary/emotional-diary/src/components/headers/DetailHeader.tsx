import Button from "../buttons/Button.tsx";
import ChevronLeftIcon from "../icons/ChevronLeftIcon.tsx";
import {useNavigate, useParams} from "react-router";
import {formatDate} from "../../utils/dateUtils.ts";

type DetailHeaderProps = {
    date: Date
}

export default function DetailHeader({date}: DetailHeaderProps) {
    const {id} = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }

    const handleUpdateClick = () => {
        navigate(`/edit/${id}`)
    }

    return (
        <header className="flex items-center gap-2 border-b-2 border-gray-200 p-4">
            <Button label="뒤로 가기" leftIcon={<ChevronLeftIcon/>} onClick={handleClick}/>
            <p className="text-sm font-semibold flex-auto text-center">{formatDate(date)} 기록</p>
            <Button label="수정하기" onClick={handleUpdateClick}/>
        </header>
    )
}