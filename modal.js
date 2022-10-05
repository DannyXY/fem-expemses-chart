const bars = document.querySelectorAll(".bar");
const modals = document.querySelectorAll(".modal");

bars.forEach((bar, index) => {
  bar.addEventListener("mouseover", function (e) {
    replenish();
    modals[index].classList.remove("hidden");
  });

  bar.addEventListener("mouseout", function (e) {
    replenish();
  });
});

function replenish() {
  modals.forEach((modal) => {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }
  });
}
