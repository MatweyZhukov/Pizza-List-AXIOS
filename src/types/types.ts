//Global
import { Dispatch, SetStateAction } from "react";

type DeletePizzaFunc = (id: IPizzaItem["id"]) => void;
type UpdatePizzaFunc = (id: IPizzaItem["id"], newPizza: IPizzaItem) => void;

export type RequestMethods = "GET" | "POST" | "DELETE";

export interface IPizzaItem {
  id: string;
  title: string;
  price: number;
  img: string;
}

export interface IAddPizzaForm {
  addPizza: (newPizza: IPizzaItem) => void;
}

export interface IDisplayPizzas {
  pizzasList: IPizzaItem[];
  deletePizza: DeletePizzaFunc;
  updatePizza: UpdatePizzaFunc;
}

export interface ISinglePizza
  extends Pick<IDisplayPizzas, "deletePizza" | "updatePizza"> {
  pizza: IPizzaItem;
}

export interface IPizzaOptions {
  pizzaImgOption: string;
  setPizzaImgOption: Dispatch<SetStateAction<string>>;
}

export interface IPizzaOptionSingle {
  img: string;
}

export interface IEditPizzaForm extends Pick<IDisplayPizzas, "updatePizza"> {
  data: IPizzaItem;
  changeFormStatus: () => void;
  formClassName: string;
}
