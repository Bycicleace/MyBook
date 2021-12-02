function newStoryFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('.new-title').value.trim();

  fetch(`/api/stories`, {
    method: 'POST',
    body: JSON.stringify({
      title: title,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(data => data.json())
  .then(response => {
    let story_id = response.id;
    newStoryPost(story_id);
  });
};

async function newStoryPost(story_id) {

  const content = document.querySelector('.new-post').value.trim();

  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      content: content,
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
}

document.querySelector('.new-story').addEventListener('submit', newStoryFormHandler);
