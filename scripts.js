function accepted () {
  alert("Você aceitou sair comigo! OBS: EU PAGO! :)");
  // redireciona para um URL após clicar no SIM
  location.href = "https://open.spotify.com/intl-pt/track/5TTGoX70AFrTvuEtqHK37S?si=b05759f3f5264e91";
}

function newPosition(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}

function declined(btn) {
  // btn declarado na função
  btn.style.position = 'absolute';
  btn.style.bottom = newPosition(10, 90);
  btn.style.left = newPosition(10, 90);
  console.log('ops......');
}
