import { useState } from "react";

const MyComponent = ({text}) => {
  const firstSentence = text.toString().split('.')[0] + '.';
  const [allText, setAllText] = useState(false);

  return (
    <>
        <p>{allText ? text : firstSentence}</p>
        <button onClick={() => setAllText(!allText)}>Показать подробнее</button>
    </>
  );
};

export default MyComponent;