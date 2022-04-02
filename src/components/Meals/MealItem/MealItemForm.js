import { useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const amount = +event.target[0].value;

    if (`${amount}`.trim().length === 0 || amount < 1 || amount > 6) {
      setIsValid(false);
      return;
    }

    props.onAddMeal(amount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
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
      {!isValid && <p>please enter valid amount</p>}
    </form>
  );
};

export default MealItemForm;
