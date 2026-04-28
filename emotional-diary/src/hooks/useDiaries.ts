import {apis} from "../apis";

export const useDiaries = () => {
    const getDiaries = async () => {
        return apis.diariesApi.getDiaries()
    }

    return {
        getDiaries
    }
}