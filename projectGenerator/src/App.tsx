import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);

  const [numbeerAllowed, setNumberAllowed] = useState(false);

  const [characterAllowed, setCharacterAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password); //For copy text input field by copy button in react js
  }, [password]);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    if (numbeerAllowed) str += "0123456789";
    if (characterAllowed) str += "@#$%^&*()!<>{}[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, characterAllowed, numbeerAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, characterAllowed, numbeerAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 mx-8 text-orange-500 bg-gray-600">
        <p className="text-white text-center my-3"> Password Generator</p>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-96 py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex text-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex text-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbeerAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers </label>
          </div>
          <div className="flex text-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
