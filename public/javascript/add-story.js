async function newStoryFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('.new-title').value;
  const content = document.querySelector('.new-post').value;
  const story_id;

  const response = await fetch(`/api/stories`, {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      user_id: req.session.user_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(dbStoriesData => {
   story_id = dbStoriesData.id;
  });

  if (response.ok) {
    const secondResponse = await fetch('/api/posts', { 
      method: 'POST',
      body: JSON.stringify({
        content: content,
        user_id: req.session.user_id,
        story_id: story_id
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
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.create-story').addEventListener('submit', newStoryFormHandler);
