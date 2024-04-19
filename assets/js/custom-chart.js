const ctx = document.getElementById("doughnutChart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Fairlaunch", "DEXs listing", "Treasury"],
    datasets: [
      {
        data: [50, 24.75, 25.25],
        borderWidth: 0,
        backgroundColor: ["#ac0272", "#7600bc", "#4c00b0"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
