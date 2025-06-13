import { useState } from "react";

const Message = ({number}) => {

  return (
    <p>{number > 0 ? "Число больше нуля" : (number < 0 ? "Число меньше нуля" : "Число равняется нулю")}</p>
  );
};

const InputNumber = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
        <Message number={number}/>
    </>
  );
};

export default InputNumber;