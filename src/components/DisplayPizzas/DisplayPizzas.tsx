//Components
import SinglePizza from "../SinglePizza/SinglePizza";

//Types
import { IDisplayPizzas } from "../../types/types";

//Styles
import "./displayPizzas.css";

function DisplayPizzas({
  pizzasList,
  deletePizza,
  updatePizza,
}: IDisplayPizzas) {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza
            key={pizza.id}
            pizza={pizza}
            deletePizza={deletePizza}
            updatePizza={updatePizza}
          />
        );
      })}
    </div>
  );
}

export default DisplayPizzas;
