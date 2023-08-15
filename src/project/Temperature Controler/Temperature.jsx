import React,{useState} from "react";
import Botton from "../../assets/components/Botton";

export default function Temperature() {

  const [temperature,setTemperature] = useState(0);

  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  };
    const decreaseTemperature = () => {
      setTemperature(temperature - 1);
  };
   return(
    <div className="contains ">
      <div className="const">
        <h1 className={`bg-dark ${temperature > 0 ? "bg-red":
      "bg-blue"}`}>
        {temperature}
        </h1>
        <div className="margin-10">
        <Botton text="-" btnClass={"bt-4"} 
        onClick={decreaseTemperature} />
        <Botton text="+" btnClass={"bt-4"} 
        onClick={increaseTemperature} />
        </div>
      </div>
    </div>
   );
}