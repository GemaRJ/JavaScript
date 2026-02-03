document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formIMC");
  const pesoInput = document.querySelector("#peso");
  const alturaInput = document.querySelector("#altura");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let peso = parseFloat(pesoInput.value);
    let altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      Swal.fire(
        "Error",
        "Introduce valores válidos para peso y altura",
        "error"
      );
      return;
    }

    let imc = peso / (altura * altura);
    let categoria = "";
    let color = "";

    if (imc < 18.5) {
      categoria = "Bajo peso";
      color = "#0d6efd";
    } else if (imc < 25) {
      categoria = "Normal";
      color = "#198754";
    } else if (imc < 30) {
      categoria = "Sobrepeso";
      color = "#ffc107";
    } else {
      categoria = "Obesidad";
      color = "#dc3545";
    }

    Swal.fire({
      title: "Tu IMC",
      html: `IMC: <strong>${imc.toFixed(
        2
      )}</strong><br>Categoría: <strong>categoria</strong>`,
      background: "#f8f9fa",
      color: color,
      icon: "info",
    });
  });
});
