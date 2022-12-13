const questionDistance = 'Відстань між містами в КМ';
const distanceKM = prompt(questionDistance);
const preferredTime = 'Час на дорогу в Годинах';
const preferredTimehours = prompt(preferredTime);
const speedKMH = distanceKM / preferredTimehours;
const answer = `швидкість з якою ви маєте рухатися - ${speedKMH}км/г`;
alert(answer)