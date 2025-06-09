async function fetchAndProcessData(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Произошла ошибка при загрузке данных:', error.message);
    return { error: error.message };
  }
}

(async () => {
  const result = await fetchAndProcessData('https://jsonplaceholder.typicode.com/posts/1');
  console.log(result);
})();