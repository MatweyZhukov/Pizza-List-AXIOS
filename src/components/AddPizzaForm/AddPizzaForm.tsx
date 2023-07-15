//Global
import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

//Types
import { IAddPizzaForm } from "../../interfaces/types";

//Styles
import "./addPizzaForm.css";

function AddPizzaForm({ addPizza }: IAddPizzaForm) {
  const [pizzaTitle, setPizzaTitle] = useState<string>(""),
    [pizzaPrice, setPizzaPrice] = useState<string>(""),
    [pizzaImgOption, setPizzaImgOption] = useState<string>("");

  const pizzaOptions = [
    "pizza-1.jpg",
    "pizza-2.jpg",
    "pizza-3.jpg",
    "pizza-4.jpg",
    "pizza-5.jpg",
    "pizza-6.jpg",
  ];

  function onAddPizza(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      pizzaTitle &&
      pizzaPrice &&
      pizzaImgOption &&
      pizzaImgOption !== "Выберите картинку..."
    ) {
      const id = uuid();

      addPizza({
        id,
        title:
          pizzaTitle.length >= 12
            ? pizzaTitle.slice(0, 12) + "..."
            : pizzaTitle,
        price: +pizzaPrice,
        img: pizzaImgOption,
      });

      setPizzaTitle("");
      setPizzaPrice("");
      setPizzaImgOption("");
    }
  }

  return (
    <form onSubmit={onAddPizza}>
      <input
        required
        type="text"
        placeholder="Название пиццы..."
        name="title"
        onChange={(e) => setPizzaTitle(e.target.value)}
        value={pizzaTitle}
      />

      <input
        required
        type="number"
        placeholder="Стоимость пиццы..."
        name="price"
        onChange={(e) => setPizzaPrice(e.target.value)}
        value={pizzaPrice}
      />
      <select
        value={pizzaImgOption}
        onChange={(e) => setPizzaImgOption(e.target.value)}
      >
        <option value="Выберите картинку...">Выберите картинку...</option>
        {pizzaOptions.map((img) => {
          const id = uuid();

          return (
            <option key={id} value={img}>
              {img}
            </option>
          );
        })}
      </select>

      <button type="submit">Добавить в меню</button>
    </form>
  );
}

export default AddPizzaForm;
