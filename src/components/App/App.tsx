//Global
import { useState, useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";

//Components
import AddPizzaForm from "../AddPizzaForm/AddPizzaForm";
import DisplayPizzas from "../DisplayPizzas/DisplayPizzas";

//Types
import { IPizzaItem } from "../../interfaces/types";

//Styles
import "./App.css";

function App() {
  const [pizzasList, setPizzasList] = useState<IPizzaItem[]>([]);

  const { request } = useHttp();

  useEffect(() => {
    request("http://localhost:3001/pizzas")
      .then((pizzas) => setPizzasList(pizzas))
      .catch((err) => console.log(err));

    //eslint-disable-next-line
  }, []);

  function addPizza(newPizza: IPizzaItem) {
    request("http://localhost:3001/pizzas", "POST", JSON.stringify(newPizza))
      .then(() => setPizzasList([...pizzasList, newPizza]))
      .catch((err) => console.log(err));
  }

  function deletePizza(id: IPizzaItem["id"]) {
    request(`http://localhost:3001/pizzas/${id}`, "DELETE")
      .then(() => {
        setPizzasList(pizzasList.filter((item) => item.id !== id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm addPizza={addPizza} />
        {pizzasList.length !== 0 ? (
          <DisplayPizzas pizzasList={pizzasList} deletePizza={deletePizza} />
        ) : (
          <h1>Ваш список пуст</h1>
        )}
      </div>
    </div>
  );
}

export default App;
