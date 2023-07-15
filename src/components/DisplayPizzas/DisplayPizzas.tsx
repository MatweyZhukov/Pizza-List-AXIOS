//Components
import SinglePizza from "../SinglePizza/SinglePizza";

//Types
import { IDisplayPizzas } from "../../interfaces/types";

//Styles
import "./displayPizzas.css";

function DisplayPizzas({ pizzasList, deletePizza }: IDisplayPizzas) {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza key={pizza.id} pizza={pizza} deletePizza={deletePizza} />
        );
      })}
    </div>
  );
}

export default DisplayPizzas;
