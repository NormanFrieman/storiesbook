form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('avatar', event.target[0].files[0]);
    fetch('http://localhost:3000/createStory', { method: 'post', body: formData })
        .then(res => res.json())
        .then(res => {
            avatar.src = `http://localhost:3000${res.payload.url}`;
            console.log(avatar.src);
            console.log(res.payload)
        })
        .catch(console.log);
})