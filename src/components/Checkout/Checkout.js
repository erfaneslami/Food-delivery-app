import classes from "./Checkout.module.css";
import { useForm } from "react-hook-form";
import Modal from "../UI/Modal";

const Checkout = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "onTouched",
    defaultValues: { name: "", address: "", phone: "" },
  });

  const { errors } = formState;

  console.log(errors);
  const submitHandler = (formData) => {
    console.log(formData);
  };

  const messageCls = `${classes.errorMessage} ${
    errors.address ? "" : classes.holder
  }`;
  const nameCls = `${classes.errorMessage} ${
    errors.name ? "" : classes.holder
  }`;
  const phoneCls = `${classes.errorMessage} ${
    errors.phone ? "" : classes.holder
  }`;
  return (
    <Modal>
      <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
        <div>
          <input
            className={classes.input}
            type="text"
            placeholder="name"
            {...register("name", { required: "please enter your name" })}
          />
          <p className={nameCls}>
            {errors.name ? errors.name.message : "\u00A0"}
          </p>
        </div>
        <div>
          <input
            className={classes.input}
            type="text"
            placeholder="address"
            {...register("address", { required: "please enter valid address" })}
          />
          <p className={messageCls}>
            {errors.address ? errors.address?.message : "\u00A0"}
          </p>
        </div>
        <div>
          <input
            className={classes.input}
            type="tel"
            placeholder="phone"
            {...register("phone", {
              required: "please enter your phone number",
              minLength: {
                value: 11,
                message: "not valid",
              },
              maxLength: {
                value: 11,
                message: "not valid",
              },

              pattern: {
                value: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                message: "not valid",
              },
            })}
          />

          <p className={phoneCls}>
            {errors.phone ? errors.phone?.message : "\u00A0"}
          </p>
        </div>

        <button type="submit" className={classes.button}>
          order
        </button>
      </form>
    </Modal>
  );
};

export default Checkout;
