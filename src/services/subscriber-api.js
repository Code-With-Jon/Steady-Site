const BASE_URL = '/api/subscribers';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(sub) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(sub)
    }).then(res => res.json());
}