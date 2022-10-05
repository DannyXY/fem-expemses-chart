const stats = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
const monthTotal = document.querySelector(".summary > div > h1 ");

let total = 0;

stats.map((stat, index) => {
  const amount = stat.amount;
  modals[index].textContent = `$${amount}`;
  total += amount;
});

monthTotal.textContent = `$${total}`;
console.log("done");
bars.forEach((bar, index) => {
  const height = (stats[index].amount / total) * 800;
  bar.style.height = `${height}px`;
  console.log(bar.style.height);
});
