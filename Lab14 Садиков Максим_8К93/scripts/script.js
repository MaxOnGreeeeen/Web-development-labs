document.addEventListener("DOMContentLoaded", () => {
  //define the key variables
  const input = document.getElementById("data");
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  const findTheBiggestSum = (arrayOfNumbers) => {

    const regExp = new RegExp(/[\d+/,]+/g);
    if (arrayOfNumbers.match(regExp)[0].length < arrayOfNumbers.length)
    return "Некорректно введены данные";

    const arrayOfStrNumbers = arrayOfNumbers.split(",");
    const arrayOfDigits = arrayOfStrNumbers.map((item) => parseInt(item));

    const sortedArray = arrayOfDigits.sort((a,b) => b - a);
    const maxSum = (arraySorted) => {
      let sum = 0;
      for (let i = 0; i < 5; i++ ) sum += arraySorted[i];
      return sum;
    }
    return maxSum(sortedArray);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const maxValue = findTheBiggestSum(input.value);
      result.innerHTML = "Максимальная полученная сумма:" + maxValue;
    } catch (e) {
      result.innerHTML = e.message;
    }
  });
});
