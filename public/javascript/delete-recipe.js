async function deleteRecipeHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/recipes/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/api/recipes');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector("#delete-recipe").addEventListener('click', deleteRecipeHandler);