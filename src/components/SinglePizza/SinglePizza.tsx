//Icons
import { AiFillDelete } from "react-icons/ai";

//Types
import { ISinglePizza } from "../../interfaces/types";

//Styles
import "./singlePizza.css";

function SinglePizza({ pizza, deletePizza }: ISinglePizza) {
  const { title, price, img } = pizza;

  return (
    <div className="pizza">
      <img src={`/images/${img}`} alt={title} />
      <h2>{title}</h2>
      <span>{price} ₽</span>

      <div className="pizza-controls">
        <AiFillDelete onClick={() => deletePizza(pizza.id)} />
      </div>
    </div>
  );
}

export default SinglePizza;
