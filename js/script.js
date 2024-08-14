const paraEncriptar = document.querySelector(".paraEncriptar");
const paraDesencriptar = document.querySelector(".paraDesencriptar");

const codificacion = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
};

const encriptar = (texto) => {
  texto = texto.toLowerCase();
  Object.entries(codificacion).forEach(([key, value]) => {
    texto = texto.replace(new RegExp(key, 'g'), value);
  });
  return texto;
};

const validarTextoEncriptar = (texto) => /^[a-z\s]+$/.test(texto);

const botonEncriptar = () => {
  const textoEncriptar = paraEncriptar.value;
  if (validarTextoEncriptar(textoEncriptar)) {
    const stringEncriptado = encriptar(textoEncriptar);
    paraDesencriptar.value = stringEncriptado;
    paraEncriptar.value = "";
    paraDesencriptar.style.backgroundImage = "none";
    document.getElementById("copy").style.display = "block";
  } else {
    alert("Texto inválido, solo se permiten letras minúsculas y sin acentos");
    paraEncriptar.value = "";
  }
};

const desencriptar = (texto) => {
  texto = texto.toLowerCase();
  Object.entries(codificacion).forEach(([key, value]) => {
    texto = texto.replace(new RegExp(value, 'g'), key);
  });
  return texto;
};

const botonDesencriptar = () => {
  const stringDesencriptado = desencriptar(paraEncriptar.value);
  paraEncriptar.value = "";
  paraDesencriptar.value = stringDesencriptado;
  paraDesencriptar.style.backgroundImage = "none";
  document.getElementById("copy").style.display = "block";
};

document.getElementById("encriptar").onclick = botonEncriptar;
document.getElementById("desencriptar").onclick = botonDesencriptar;

const copiar = () => {
  let texto = paraDesencriptar.value;
  navigator.clipboard.writeText(texto);
  paraDesencriptar.value = " ";
  paraEncriptar.value = texto;
  document.getElementById("copy").style.display = "none";
  paraDesencriptar.style.backgroundImage = "";
  alert("Copiado al portapapeles y al campo de entrada");
};

document.getElementById("copy").onclick = copiar;
