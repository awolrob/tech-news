async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('textarea[name="post-title"]').value;
  // const post_url = document.querySelector('input[name="post-url"]').value;
  const blog = document.querySelector('textarea[name="blog"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      blog
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
document.querySelector('#new-post').addEventListener('click', () => {
  document.getElementById("post-form").style.display = "";
});
