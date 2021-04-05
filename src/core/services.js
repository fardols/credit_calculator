
const hostAddress = 'http://' + window.location.host;

export function getRequestService(url) {
    const resultUrl = hostAddress + url;
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'get',
        };
        fetch(resultUrl, requestOptions)
            .then(
                (response) => {
                    if(response.status === 200) {
                        return resolve(response.json())
                    } else {
                        return reject(response.json())
                    }
                },
                (error) => {
                    return reject(error)
                },
            )
    })
}

export function postRequestService(url, data) {
    const resultUrl = hostAddress + url;
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers,
            body: JSON.stringify(data)    // тип данных в body должен соответвовать значению заголовка "Content-Type"
        };
        fetch(resultUrl, requestOptions)
            .then(
                (response) => {
                    if(response.status === 200) {
                        return resolve(response.json())
                    } else {
                        return reject(response.json())
                    }
                },
                (error) => {
                    return reject(error)
                },
            )
    })
}
