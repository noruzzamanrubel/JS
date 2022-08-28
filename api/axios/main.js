// axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// axios.post('https://jsonplaceholder.typicode.com/posts', {
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
// })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err))

const MakeRequest = async (config) => {
    return await axios(config);
}

const getData = () => {
    MakeRequest('https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
}

const sendData = () => {
    MakeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/',
        method: 'post',
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })

    })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
}

getData();
sendData();