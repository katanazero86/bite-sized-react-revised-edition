export const diaryMock: { id: string, content: string, createdAt: Date, emotion: 'normal' | 'veryGood' | 'bad' | 'good' | 'veryBad'}[] = [
    {
        id: '1',
        content: 'This is a sample diary entry for testing purposes.',
        createdAt: new Date('2026-04-27T00:00:00'),
        emotion: 'normal',
    },
    {
        id: '2',
        content: 'This is another sample diary entry.',
        createdAt: new Date('2026-04-27T01:00:00'),
        emotion: 'veryGood',
    },
    {
        id: '3',
        content: 'Yet another sample diary entry.',
        createdAt: new Date('2026-04-27T02:00:00'),
        emotion: 'bad',
    },
    {
        id: '4',
        content: '3월 어느날..',
        createdAt: new Date('2026-03-27T02:00:00'),
        emotion: 'bad',
    },
]