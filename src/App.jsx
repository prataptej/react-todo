import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="h-screen bg-gray-950 text-white p-8">
      <h1 className="font-primary text-5xl text-center">Todo App</h1>
      <TodoList />
    </main>
  );
}

export default App;
