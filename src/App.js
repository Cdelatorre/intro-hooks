import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
        <Counter />
      </div>

      {/* <TodoList /> */}
    </div>
  );
}

export default App;
