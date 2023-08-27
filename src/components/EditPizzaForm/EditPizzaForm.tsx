//Global
import { FormEvent, useState } from "react";

//Types
import { IEditPizzaForm } from "../../types/types";

//Components
import PizzaOptions from "../PizzaOptions/PizzaOptions";

//Styles
import "./editPizzaForm.css";

function EditPizzaForm({
  data,
  updatePizza,
  changeFormStatus,
  formClassName,
}: IEditPizzaForm) {
  const [editedPizzaTitle, setEditedPizzaTitle] = useState<string>(data.title),
    [editedPizzaPrice, setEditedPizzaPrice] = useState<string>(data.price + ""),
    [editedPizzaImgOption, setEditedPizzaImgOption] = useState<string>(
      data.img
    );

  function onEditPizza(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      editedPizzaTitle &&
      editedPizzaPrice &&
      editedPizzaImgOption &&
      editedPizzaImgOption !== "Выберите картинку..."
    ) {
      updatePizza({
        ...data,
        title: editedPizzaTitle,
        price: +editedPizzaPrice,
        img: editedPizzaImgOption,
      });
      changeFormStatus();
    }
  }

  return (
    <form className={formClassName} onSubmit={(e) => onEditPizza(e)}>
      <input
        required
        type="text"
        placeholder="Название пиццы..."
        name="title"
        onChange={(e) => setEditedPizzaTitle(e.target.value)}
        value={editedPizzaTitle}
      />

      <input
        required
        type="number"
        placeholder="Стоимость пиццы..."
        name="price"
        onChange={(e) => setEditedPizzaPrice(e.target.value)}
        value={editedPizzaPrice}
      />

      <PizzaOptions
        pizzaImgOption={editedPizzaImgOption}
        setPizzaImgOption={setEditedPizzaImgOption}
      />

      <button type="submit">Подтвердить</button>
    </form>
  );
}

export default EditPizzaForm;
