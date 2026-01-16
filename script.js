let qr = null;

function generarQR() {
  const texto = document.getElementById("text").value.trim();
  if (!texto) {
    alert("Por favor ingresa un texto o URL");
    return;
  }

  const contenedor = document.getElementById("qrcode");
  contenedor.innerHTML = ""; // limpiar código anterior

  qr = new QRCode(contenedor, {
    text: texto,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}