const length = 10000000;
const array = Array(length).fill().map((_, i) => i + 1);

array.splice(0,1);
array.splice(0,1);

// Сложность алгоритма O(n)
const findAbsentNumbers = (array, length) => {
	const absentNumbers = [];

	// Проверяем начало массива, если array не начинается с 1, добавляем недостающие числа
	let current = 1;
	for (const num of array) {
		// Если текущий ожидаемый номер меньше числа в массиве, значит число отсутствует
		while (current < num) {
			absentNumbers.push(current);
			current += 1;
			if (absentNumbers.length === 2) {
				return absentNumbers;
			}
		}
		// устанавливаем следующее ожидаемое число как текущее для следующей итерации
		current = num + 1;
	}

	// Если текущий номер не достиг `length`, добавляем оставшиеся недостающие числа
	while (current <= length && absentNumbers.length < 2) {
		absentNumbers.push(current);
		current += 1;
	}

	return absentNumbers;
};

console.time('O(n)');
const result1 = findAbsentNumbers(array, length)
console.timeEnd('O(n)');
console.log(result1)