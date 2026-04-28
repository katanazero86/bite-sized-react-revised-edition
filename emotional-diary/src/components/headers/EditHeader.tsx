import {useNavigate, useParams} from "react-router";
import Button from "../buttons/Button.tsx";
import ChevronLeftIcon from "../icons/ChevronLeftIcon.tsx";
import {useDiariesMutations} from "../../hooks/useDiariesMutations.ts";

export default function EditHeader() {
    const navigate = useNavigate();
    const {id} = useParams();

    const {deleteDiaries} = useDiariesMutations()

    const handleClick = () => {
        navigate(-1)
    }

    const handleDeleteClick = async () => {
        if (confirm("정말 삭제하시겠습니까?")) {
            await deleteDiaries(id!)
            navigate('/', {replace: true});
        }
    }

    return (
        <header className="flex items-center gap-2 border-b-2 border-gray-200 p-4">
            <Button label="뒤로 가기" leftIcon={<ChevronLeftIcon/>} onClick={handleClick}/>
            <p className="text-sm font-semibold flex-auto text-center">일기 수정하기</p>
            <Button label="삭제하기" onClick={handleDeleteClick}/>
        </header>
    )
}