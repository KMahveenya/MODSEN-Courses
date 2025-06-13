import { useRef } from "react";

const MyComponent = () => {
  const ref = useRef(null);

  const handleInputButton = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  }

  return (
    <form onSubmit={handleInputButton}>
        <input ref={ref} type="text"></input>
        <button type="submit">Отправить в консоль</button>
    </form>
  );
};

export default MyComponent;