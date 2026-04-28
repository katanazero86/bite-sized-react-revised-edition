import * as zod from 'zod';

export const Diary = zod.object({
    id: zod.string('id is required'),
    content: zod.string().min(1, 'content is required'),
    createdAt: zod.date('date is required'),
    emotion: zod.union([
        zod.literal('veryGood'),
        zod.literal('good'),
        zod.literal('normal'),
        zod.literal('bad'),
        zod.literal('veryBad'),
    ]),
})

export type DiaryType = zod.infer<typeof Diary>