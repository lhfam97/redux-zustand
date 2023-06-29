import { FormEvent, useState } from "react";
import { useAppDispatch } from "../store";
import { add } from "../store/index_old";
export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  // hook usado para disparar acoes na store
  const dispatch = useAppDispatch();
  function handleNewTodo(e: FormEvent) {
    e.preventDefault();
    dispatch(add({ newTodo }));
    setNewTodo("");
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="Novo to-do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}
