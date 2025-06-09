new Promise((resolve) => {
  setTimeout(() => resolve(5), 3000);
})
  .then((result) => {
    console.log("Первый промис:", result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result ** 2), 3000);
    });
  })
  .then((result) => {
    console.log("Второй промис:", result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result ** 2), 3000);
    });
  })
  .then((result) => {
    console.log("Третий промис:", result);
  });