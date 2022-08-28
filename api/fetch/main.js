// fetch('https://jsonplaceholder.typicode.com/posts', {
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
// })
//     .then((res) => {
//         if (!res.ok) {
//             const message = 'Please insert correct Api ul'
//             throw new Error(message)
//         }
//         return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

const MakeRequest = async (url, method) => {
    const res = await fetch(url, method);
    if (!res.ok) {
        const message = 'please provide correct api url'
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

const getData = () => {
    MakeRequest('https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

}

getData();


const sendData = () => {
    MakeRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

}

sendData();