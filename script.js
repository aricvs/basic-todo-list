"use strict";

const deleteItem = () => {
  const trashButton = document.querySelectorAll(".trash-icon");
  trashButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("test");
    });
  });
};

deleteItem();
