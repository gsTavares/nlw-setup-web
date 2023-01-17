import Habit from "./components/Habit";
import "./index.css";

export default function App() {

  return (
    <div>
      <Habit completed={3} />
      <Habit  completed={10}/>
      <Habit completed={20} />
      <Habit completed={30} />
    </div>
  )
}