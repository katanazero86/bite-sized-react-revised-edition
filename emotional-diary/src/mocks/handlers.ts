import {http, HttpResponse} from 'msw'
import type {DiaryType} from "../schema/diary/diarySchema.ts";

let diariesMock: DiaryType[] = [
    {
        id: '1',
        content: 'This is a sample diary entry for testing purposes.',
        createdAt: new Date('2026-04-27T00:00:00').toISOString(),
        emotion: 'normal',
    },
    {
        id: '2',
        content: 'This is another sample diary entry.',
        createdAt: new Date('2026-04-27T01:00:00').toISOString(),
        emotion: 'veryGood',
    },
    {
        id: '3',
        content: 'Yet another sample diary entry.',
        createdAt: new Date('2026-04-27T02:00:00').toISOString(),
        emotion: 'bad',
    },
    {
        id: '4',
        content: '3월 어느날..',
        createdAt: new Date('2026-03-27T02:00:00').toISOString(),
        emotion: 'bad',
    },
    {
        id: '5',
        content: '3월 어느날..222',
        createdAt: new Date('2026-03-27T12:00:00').toISOString(),
        emotion: 'bad',
    },
]


export const handlers = [
    http.get('/api/diaries', () => {
        return HttpResponse.json(diariesMock)
    }),

    http.post('/api/diaries', async ({request}) => {
        const body = await request.json()
        if (!body) return HttpResponse.json({message: 'body is empty'}, {status: 400})

        diariesMock.push(body as DiaryType)
        return HttpResponse.json({
            message: 'Diary created successfully',
            id: (body as DiaryType).id,
        }, {status: 201})
    }),

    http.put('/api/diaries/:id', async ({request, params}) => {
        const body = await request.json()
        const {id} = params
        if (!body || !id) return HttpResponse.json({message: 'body(id) is empty'}, {status: 400})

        diariesMock = diariesMock.map(d => d.id === id ? {...d, ...body as DiaryType} : d)
        return HttpResponse.json({message: 'Diary updated successfully', id}, {status: 200})
    }),

    http.delete('/api/diaries/:id', ({params}) => {
        const {id} = params
        if (!id) return HttpResponse.json({message: 'id is empty'}, {status: 400})
        diariesMock = diariesMock.filter(d => d.id !== id)
        return HttpResponse.json({message: 'Diary deleted successfully', id}, {status: 200})
    }),

]