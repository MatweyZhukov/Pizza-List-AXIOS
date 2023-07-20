//Types
import { IPizzaOptionSingle } from "../../types/types";

function PizzaOptionSingle({ img }: IPizzaOptionSingle) {
  return <option value={img}>{img}</option>;
}

export default PizzaOptionSingle;
