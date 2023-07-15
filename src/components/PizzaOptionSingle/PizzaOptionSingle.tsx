//Types
import { IPizzaOptionSingle } from "../../interfaces/types";

function PizzaOptionSingle({ id, img }: IPizzaOptionSingle) {
  return (
    <option key={id} value={img}>
      {img}
    </option>
  );
}

export default PizzaOptionSingle;
