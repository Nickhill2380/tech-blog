async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelectorI('input[name="post-title"]').value;
    const text_area = document.querySelector('input[name="post-text"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            text_area
        }),
        headers: {
            'Content-Type': 'application/json'  
        }
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);