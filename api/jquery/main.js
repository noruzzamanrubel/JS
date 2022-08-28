const MakeRequest = async (url, method, data) => {
    try {
        const result = await $.ajax({
            url: url,
            method: method,
            data: data,
        });
        return result;
    } catch (err) {
        console.log(err)
    }
};

const getData = () => {
    MakeRequest('https://jsonplaceholder.typicode.com/posts/', 'GET')
        .then((res) => console.log(res))
};
getData();

const sendData = () => {
    MakeRequest('https://jsonplaceholder.typicode.com/posts/', 'POST', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
        .then((res) => console.log(res))
};
sendData();

const updateData = () => {
    MakeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT', {
        id: 1,
        title: 'fooup date',
        body: 'bar',
        userId: 1,
    })
        .then((res) => console.log(res))
};
updateData();

const updatesingleData = () => {
    MakeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PATCH', {
        title: 'single foo update',
    })
        .then((res) => console.log(res))
};
updatesingleData();

const deleteData = () => {
    MakeRequest('https://jsonplaceholder.typicode.com/posts/1', 'DELETE', {
    })
        .then((res) => console.log(res))
};
deleteData();