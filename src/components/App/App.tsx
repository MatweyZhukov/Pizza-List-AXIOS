//Global
import { useState, useEffect } from "react";
import axios from "axios";

//Components
import AddPizzaForm from "../AddPizzaForm/AddPizzaForm";
import DisplayPizzas from "../DisplayPizzas/DisplayPizzas";

//Types
import { IPizzaItem } from "../../types/types";

//Styles
import "./App.css";

function App() {
  const [pizzasList, setPizzasList] = useState<IPizzaItem[]>([]);

  useEffect(() => {
    fetchPizzasList();
  }, []);

  async function fetchPizzasList() {
    await axios
      .get<IPizzaItem[]>("http://localhost:3001/pizzas")
      .then((res) => setPizzasList(res.data))
      .catch((e) => console.log(e));
  }

  async function addPizza(newPizza: IPizzaItem) {
    await axios
      .post("http://localhost:3001/pizzas", newPizza)
      .then((res) => setPizzasList([...pizzasList, res.data]))
      .catch((e) => console.log(e));
  }

  async function updatePizza(id: IPizzaItem["id"], newPizza: IPizzaItem) {
    await axios
      .put(`http://localhost:3001/pizzas/${id}`, newPizza)
      .then(() => {
        setPizzasList(
          pizzasList.map((item) => (item.id === newPizza.id ? newPizza : item))
        );
      })
      .catch((e) => console.log(e));
  }

  async function deletePizza(id: IPizzaItem["id"]) {
    await axios
      .delete(`http://localhost:3001/pizzas/${id}`)
      .then(() => setPizzasList(pizzasList.filter((item) => item.id !== id)))
      .catch((e) => console.log(e));
  }

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm addPizza={addPizza} />
        {pizzasList.length !== 0 ? (
          <DisplayPizzas
            pizzasList={pizzasList}
            deletePizza={deletePizza}
            updatePizza={updatePizza}
          />
        ) : (
          <h1>Ваш список пуст</h1>
        )}
      </div>
    </div>
  );
}

export default App;
