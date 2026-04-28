import type {DiaryType} from "../../schema/diary/diarySchema.ts";

export const diariesApi = {
    async getDiaries() {
        try {
            const response = await fetch('/api/diaries')
            return response.json()
        } catch(e) {
            console.error('getDiaries api error:', e)
        }
    },
    async createDiaries(form: DiaryType) {
        try {
            const response = await fetch('/api/diaries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            return response.json()
        } catch(e) {
            console.error('createDiaries api error:', e)
        }
    },
    async updateDiaries(form: DiaryType) {
        try {
            const response = await fetch(`/api/diaries/${form.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form),
            })
            return response.json()
        } catch(e) {
            console.error('updateDiaries api error:', e)
        }
    },
    async deleteDiaries(id: string) {
        try {
            const response = await fetch(`/api/diaries/${id}`, {
                method: 'DELETE'
            })
            return response.json()
        } catch(e) {
            console.error('deleteDiaries api error:', e)
        }
    }
}