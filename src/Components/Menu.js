import React, { useEffect } from "react";

function Menu({ title, menuObject }) {
  useEffect(() => {
    const allLi = document
      .querySelector(".MenuContainer u1")
      .querySelectorAll("li");

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>

      <u1>
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id}>
              {" "}
              <a href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </u1>
    </div>
  );
}

export { Menu };
