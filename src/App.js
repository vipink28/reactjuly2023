import "./App.css";
import Child from "./components/Child";
import Counter from "./components/Counter";
import CounterObject from "./components/CounterObject";
import Parent from "./components/Parent";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div>
      {/* <Counter />
        <CounterObject /> */}
      <StudentList />
      <Child title="App Client 3" clientName="IBM" isApp={true}/>
      <Parent />
      
    </div>
  );
}

export default App;
