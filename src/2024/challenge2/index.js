/*
· Sólo usa letras minúsculas y dígitos.
· Nunca usa dígitos después de una letra (Una vez aparecen letras, la contraseña debe continuar solo con letras)
· Si usa dígitos, siempre los usa de forma creciente (si sale un 3, ya no usará después un número menor)
· Si usa letras, siempre las usa en orden alfabético creciente (si sale una "b" ya no podrá usar una "a", por ejemplo)
*/
const isValid = (text) => {
  let onlyLetters = false;
  let lastDigit = -1;
  let lastLetter = "";

  for (const char of text) {
    if (/[0-9]/.test(char)) {
      if (onlyLetters) return false; // No digits after letters
      const digito = parseInt(char);
      if (digito < lastDigit) return false; // Digits are not in increasing order
      lastDigit = digito;
    } else if (/[a-z]/.test(char)) {
      onlyLetters = true;
      if (char < lastLetter) return false; // Letters are not in increasing order
      lastLetter = char;
    } else {
      return false; // Invalid character
    }
  }

  return true;
};

module.exports = { isValid };
