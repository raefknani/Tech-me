function handleSubmit(event) {
  event.preventDefault();

  const description = document.getElementById('description').value;

  fetch('http://localhost:5000/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `description=${description}`,
  })
  .then(response => response.text())
  .then(data => console.log(data));
}
export default handleSubmit;