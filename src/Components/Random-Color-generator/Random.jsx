import { useEffect, useState } from "react";

function Random() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        textAlign: "center",
        background: color,
      }}
    >
      <button className="bg-red-600 p-2 text-white mx-3 rounded-md mt-20" onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button className="bg-green-600 p-2 text-white mx-3 rounded-md mt-20" onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button className="bg-slate-600 p-2 text-white rounded-md mt-20"
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
           
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "1.5rem",
          marginTop: "20px",
          flexDirection  :'column',
          gap :'10px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
      <footer className="text-center text-black mt-20">
        <p>&#x3c; &#47; &#x3e; with ❤️ by  <a href="">Shivani Sinha</a>
          <br /> 
          <a href="https://github.com/chiragha/Reactjs-interview-projects" target="_blank">#Reactjs-interview-projects
          </a>
        </p>
      </footer>
    </div>
  );
}


export default Random;