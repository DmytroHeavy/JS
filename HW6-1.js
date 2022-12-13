
const questionHeightcylinder = 'Висота циліндра в СМ';
const heightcylinderсм2 = prompt(questionHeightcylinder);
const questionDiametercylinder = 'Діаметр циліндра в см2';
const diametercylinderсм2 = prompt(questionDiametercylinder);
const cylinderVolume = diametercylinderсм2 * 3.14 * heightcylinderсм2 / 1000000  ;
const answer = `Обєм циліндра - ${cylinderVolume}м3`;
alert(answer)