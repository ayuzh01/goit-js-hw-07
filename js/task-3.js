const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', function() {
    let name = nameInput.value.trim();

    if (name === '') {
      name = 'Anonymous';
    }

    nameOutput.textContent = name;
  });