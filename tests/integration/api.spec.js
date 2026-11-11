import { test, expect } from '@playwright/test'

test('GET - получение записи', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1')

    expect(response.status()).toBe(200)

    const data = await response.json()

    expect(data.id).toBe(1)
})






test('POST -  создание записи', async ({ request }) => {
    const newPost = {
        title: 'Моя первая запись',
        body: 'Тестирование API через Playwright',
        userId: 1
    }

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: newPost,
    })

    expect(response.status()).toBe(201)

    const data = await response.json()

    expect(data.title).toBe(newPost.title)
    expect(data.body).toBe(newPost.body)

    expect(data.userId).toBe(newPost.userId)
})







test('PUT - обновление записи', async ({ request }) => {
const updatedPost = {
id: 1,
title: 'Обновленная запись',
body: 'Новый текст записи',
userId: 1,
};

const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
data: updatedPost,
});

expect(response.status()).toBe(200);

const data = await response.json();

expect(data.title).toBe(updatedPost.title);
expect(data.body).toBe(updatedPost.body);
});












test('DELETE - удаление записи', async ({ request }) => {
const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

expect(response.status()).toBe(200);

const data = await response.json();

expect(data).toEqual({});
});