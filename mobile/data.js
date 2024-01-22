export function ShowCategoryProducts(categoryId) {
    return fetch('http://192.168.1.105:8000/api/products/' + categoryId + '/1', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(response => response.json());
}

export function ShowCategories() {
    return fetch('http://192.168.1.105:8000/api/categories', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(response => response.json());
}

export function LoginRequest(data) {
    return fetch('http://192.168.1.105:8000/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            data
        )
    })
}
export function SignUp(data) {
    return fetch('http://192.168.1.105:8000/api/signUp', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            data
        )
    })
}