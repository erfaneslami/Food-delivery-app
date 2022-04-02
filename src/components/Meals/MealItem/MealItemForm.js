import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const ctx = useContext(CartContext);

  const addMealToCartHandler = (event) => {
    event.preventDefault();
    const amount = event.target[0].value;
    const item = { name: props.name, price: props.price, amount: amount };
    ctx.addItem(item);
  };

  return (
    <form className={classes.form} onSubmit={addMealToCartHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
