const photographer = [
  {
    name: "John Doe",
    age: 30,
    city: "New York",
    image:
      "https://images.pexels.com/photos/1728163/pexels-photo-1728163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Thomas Doe",
    age: 25,
    city: "Los Angeles",
    image:
      "https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "John Smith",
    age: 35,
    city: "Chicago",
    image:
      "https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jane Smith",
    age: 35,
    city: "Chicago",
    image:
      "https://images.pexels.com/photos/3584957/pexels-photo-3584957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

let boxPhotographer = document.querySelector(".container_images");

// Configurer la section des photographes
boxPhotographer.id = "photographers-section";

// Créer et ajouter un titre à la section
const sectionTitle = document.createElement("h2");
sectionTitle.classList.add("section-title");
sectionTitle.textContent = "Nos Photographes Professionnels";
boxPhotographer.appendChild(sectionTitle);

// Créer et ajouter les cartes de photographes
photographer.map((photographer) => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.setAttribute("tabindex", "0");
  box.innerHTML = `
  <a href="${photographer.name.replace(" ", "-")}.html">
      <img class="img_photographer" src="${photographer.image}" alt="${
    photographer.name
  }, photographe professionnel" loading="lazy">
      </a>
      
      <div class="info_name">
          <p>${photographer.name}</p>
      </div>
      `;
  boxPhotographer.appendChild(box);
});
