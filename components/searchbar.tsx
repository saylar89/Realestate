import { useState, useEffect, FormEvent } from "react";
import ReactInputEvent from "./event/type";

const SearchBar = () => {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);

  const onInputChange = (event: ReactInputEvent) => {
    setText(event.target.value);
  };

  const removeText = (text: ReactInputEvent) => {
    setTexts(texts.filter((t) => t != text));
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const data = localStorage.getItem("user");
      setTexts(JSON.parse(data!));
    }
  }, []);

  const onClick = (e: FormEvent) => {
    e.preventDefault();
    const data = [...texts, text];
    setTexts(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <div>
      <form>
        <label>Please enter your firstname</label>
        <br />
        <br />
        <input
          name="add"
          type="text"
          value={text}
          onChange={onInputChange}
        ></input>
        <br />
        <br />
        <button onClick={onClick}>Click to add</button>
      </form>
      <div>
        <ul>
          {texts.map((text) => {
            return (
              <div>
                <li>{text}</li>
                <br />
                <button onClick={() => removeText(text)}>Remove</button>
                <br />
                <br />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
