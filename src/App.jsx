import { useState } from "react"

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = [
      ...todoList.filter((val) => {
      return val.todoName != deleteValue;
      }),
    ];
    setTodoList(restTodoList);
  };

  return (
    <div className="bg-gray-300 w-full h-screen flex items-center">
      <div className="m-[500px] mx-auto text-center bg-[#fdba74] p-5 rounded-lg">
        <h1 className="text-5xl font-bold mb-8">Todo List</h1>
        <form onSubmit={handleForm}>
          <input className="border-2 placeholder:text-gray-500 border-black hover:border-gray-500 rounded-lg w-full p-5 mb-5 text-black" type="text" placeholder="Add Todo" value={todo} onChange={(e) => setTodo(e.target.value)}/>
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg mb-8">Add</button>
        </form>
        <div className="todo-show-area">
          <ul>
            {todoList.map((singleTodo, index) => {
              return (
                <li 
                key={index}
                className="bg-white mb-5 flex justify-between text-green-700 py-5 rounded-lg px-5 text-3xl">
                {singleTodo.todoName}{" "}
                <span onClick={() => deleteTodo(singleTodo.todoName)} className="text-black-600 hover:text-red-600 text-3xl cursor-pointer">X</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App