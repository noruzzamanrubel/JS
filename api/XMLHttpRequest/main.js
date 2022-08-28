makeRequest = (method, url, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror = () => {
        console.log('some thing is wrong')
    }
    xhr.setRequestHeader('Content-type', 'application/json',)

    xhr.send(JSON.stringify(data));
}

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
}

const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}

const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'foo Update',
        body: 'bar Update',
        userId: 1,
    });
}

const singleDataUpdate = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'Single Foo Update',
    });
}

const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', {
    });
}
// getData();
// sendData();
// updateData();
// singleDataUpdate();
deleteData();
