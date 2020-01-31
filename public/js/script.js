let btn = document.querySelector('.btn');
let postBtn = document.querySelector('.post');

btn.addEventListener('click', function(){
    fetch('http://localhost:3000/users/2')
        .then((response) => response.json())
        .then((data) => console.log(data))
})


postBtn.addEventListener('click', function(){
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain'
        },
        body: JSON.stringify({
            login: 'Nancy',
            age: 20
        })
    }).then((response) => response.text()).then((data) => console.log(data));
})