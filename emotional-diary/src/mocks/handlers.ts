import {http, HttpResponse} from 'msw'

export const handlers = [
    // Handles a GET /api/user request
    http.get('/api/user', ({ request, params }) => {
        console.log(request)
        console.log(params)
        return HttpResponse.json({ name: 'John Doe' })
    }),
]