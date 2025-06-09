function checkNumber(data) {
  return new Promise((resolve, reject) => {
    if (typeof data !== 'number' || isNaN(data)) {
      reject('it is not a number');
      return;
    }

    if (data % 2 === 1) {
      setTimeout(() => resolve('Odd'), 1000);
    } else {
      setTimeout(() => resolve('Even'), 2000);
    }
  });
}

checkNumber(4).then((result) => console.log(result))
