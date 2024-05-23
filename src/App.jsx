//import { useState } from "react"
//import { CountContext } from "./context";

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { checkNum, countAtom } from "./store/atoms/count";

// Context, State Management, Recoil
function App() {
  // const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider
  //console.log("Re-render App");
  return (
    <div>
    <Count />
    </div>
  )
}

function Count() {
  //console.log("Re-render Count");
  return <div>
    <RecoilRoot>
      <CountRerender />
      <Button />
    </RecoilRoot>
  </div>
}

function CountRerender() {
  //console.log("Re-render CountRerender")
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Button() {
  //console.log("Button re-render")
  //const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  const printEven = useRecoilValue(checkNum);

  return <div>
    <button onClick={() => {
      setCount(count => count + 1);
    }}>Increment</button>

    <button onClick={() => {
      setCount(count => count - 1);
    }}>Decrement</button>
    <br />
    {printEven}
  </div>
}


export default App
