import { useState, useEffect, useRef } from "react";

const stylesTextTimer = {
  clockFace: {
    fontSize: 64,
    fontWeight: 500,
    textAlign: "center",
  },
};

const styleBtnTimer = {
  btnFace: {
    backgroundColor: "#f1f1f1",
    width: 100,
    color: "black",
    fontSize: 20,
    padding: 16,
    border: "none",
    cursor: "pointer",
    borderRadius: 5,
  },
};

export default function Clock(params) {
  const [time, setTime] = useState(new Date());
  const [isRuning, setIsRuning] = useState(true);
  const intervalId = useRef();

  useEffect(() => {
    if (isRuning) {
      intervalId.current = setInterval(() => {
        console.log(" Это интервал каждые 1000ms " + new Date());
        setTime(new Date());
      }, 1000);
    } else {
      stop();
    }
    return () => {
      console.log("Эта функция вызывается после каждого useEffect");
      stop();
    };
  }, [isRuning]);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  const toggleTimer = () => {
    setIsRuning((prevIsRuning) => !prevIsRuning);
  };

  return (
    <>
      <p style={stylesTextTimer.clockFace}>
        Date now {time.toLocaleTimeString()}
      </p>
      <button style={styleBtnTimer.btnFace} onClick={toggleTimer}>
        {isRuning ? "stop" : "start"}
      </button>
    </>
  );
}
