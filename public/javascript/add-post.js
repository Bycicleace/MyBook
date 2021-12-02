async function newFormHandler(event) {
  event.preventDefault();

  const content = document.querySelector('.post-content').value.trim();
  const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      content: content,
      user_id: req.session.user_id,
      story_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
