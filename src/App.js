import "./styles.css";
import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("Apps");

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChageText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChageText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
