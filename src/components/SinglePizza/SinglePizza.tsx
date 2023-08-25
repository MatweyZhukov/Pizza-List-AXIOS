//Global
import { useState } from "react";

//Icons
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

//Types
import { ISinglePizza } from "../../types/types";

//Styles
import "./singlePizza.css";
import EditPizzaForm from "../EditPizzaForm/EditPizzaForm";

function SinglePizza({ pizza, deletePizza, updatePizza }: ISinglePizza) {
  const [edit, setEdit] = useState<boolean>(false);

  const { title, price, img } = pizza;

  let formClassName = "edit-form";

  if (edit) {
    formClassName += " opened";
  } else {
    formClassName += " hidden";
  }

  const changeFormStatus = () => {
    setEdit(!edit);
  };

  return (
    <div className="pizza">
      <img src={`/images/${img}`} alt={title} />
      <h2>{title}</h2>
      <span>{price} ₽</span>

      <div className="pizza-controls">
        <AiFillEdit onClick={changeFormStatus} />
        <AiFillDelete onClick={() => deletePizza(pizza.id)} />
      </div>

      <EditPizzaForm
        formClassName={formClassName}
        updatePizza={updatePizza}
        data={pizza}
        changeFormStatus={changeFormStatus}
      />
    </div>
  );
}

export default SinglePizza;
