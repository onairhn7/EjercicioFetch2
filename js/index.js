// script.js

document.addEventListener("DOMContentLoaded", function () {
    // URL de la API
    const apiUrl = "https://api.escuelajs.co/api/v1/categories";
  
    // Obtener la lista de categorías
    fetch(apiUrl)
      .then((response) => response.json())
      .then((categories) => {
        const categoryList = document.getElementById("category-list");
  
        // Iterar sobre la lista de categorías
        categories.forEach((category) => {
          // Crear un elemento de lista
          const listItem = document.createElement("li");
          listItem.className = "list-group-item";
  
          // Crear un contenedor para la información de la categoría
          const categoryInfoContainer = document.createElement("div");
  
          // Mostrar la información de la categoría en el contenedor
          categoryInfoContainer.innerHTML = `
                      <img src="${category.image}" alt="${category.name}" class="mr-3" style="max-width: 50px;">
                      <div>
                          <h5>${category.name}</h5>
                      </div>
                  `;
  
          // Agregar el contenedor al elemento de la lista
          listItem.appendChild(categoryInfoContainer);
  
          // Agregar el elemento de la lista a la lista de categorías
          categoryList.appendChild(listItem);
        });
      })
      .catch((error) =>
        console.error("Error al obtener la lista de categorías:", error)
      );
  });