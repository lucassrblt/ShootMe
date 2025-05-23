var photographer = [
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

var boxPhotographer = document.querySelector(".container_images");
if (boxPhotographer) {
  boxPhotographer.setAttribute("id", "photographers-section");
  boxPhotographer.setAttribute("role", "region");
  boxPhotographer.setAttribute("aria-labelledby", "photographers-title");

  var sectionTitle = document.createElement("h2");
  sectionTitle.className = "section-title";
  sectionTitle.setAttribute("id", "photographers-title");
  sectionTitle.textContent = "Nos Photographes Professionnels";
  boxPhotographer.appendChild(sectionTitle);

  for (var i = 0; i < photographer.length; i++) {
    var p = photographer[i];

    var card = document.createElement("article");
    card.className = "box";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "listitem");
    card.setAttribute(
      "aria-label",
      p.name +
        ", photographe professionnel âgé de " +
        p.age +
        " ans, basé à " +
        p.city
    );

    var link = document.createElement("a");
    link.href = `./pages/${p.name.replace(/\s+/g, "-").toLowerCase()}.html`;
    link.className = "photographer-link";
    link.setAttribute(
      "aria-label",
      "Voir le profil de " + p.name + ", photographe à " + p.city
    );

    var img = document.createElement("img");
    img.className = "img_photographer";
    img.src = p.image;
    img.alt =
      "Portrait de " +
      p.name +
      ", photographe professionnel à " +
      p.city +
      " (" +
      p.age +
      " ans)";

    img.setAttribute("loading", "lazy");

    link.appendChild(img);

    var info = document.createElement("div");
    info.className = "info_name";

    var nameP = document.createElement("p");
    nameP.textContent = p.name;
    info.appendChild(nameP);

    card.appendChild(link);
    card.appendChild(info);
    boxPhotographer.appendChild(card);
  }
}
