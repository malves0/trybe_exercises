import './App.css';

const taskList = ["Correr 10km", "Fazer 100 agahamentos", "Fazer 100 flexões", "Fazer 100 abdominais"];
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (<div> { taskList.map(tasks => task(tasks)) } </div>)
}

export default App;
