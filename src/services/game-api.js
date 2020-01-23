const BASE_URL = '/api/game';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(answers) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(answers)
    }).then(res => res.json());
}