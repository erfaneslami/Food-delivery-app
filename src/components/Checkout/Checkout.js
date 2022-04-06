import classes from "./Checkout.module.css";
import { useForm } from "react-hook-form";
import Modal from "../UI/Modal";

const Checkout = () => {
  const { register } = useForm();
  return (
    <Modal>
      <form className={classes.form}>
        <input
          className={classes.input}
          type="text"
          placeholder="name"
          {...register("name", { require: "please enter your name" })}
        />
        <input
          className={classes.input}
          type="text"
          placeholder="address"
          {...register("address", { require: "please enter valid address" })}
        />
        <input className={classes.input} type="number" placeholder="number" />
        <button type="submit" className={classes.button}>
          order
        </button>
      </form>
    </Modal>
  );
};

export default Checkout;
