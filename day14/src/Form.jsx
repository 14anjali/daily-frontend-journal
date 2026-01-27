import { useForm } from "react-hook-form";
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="first">Name: </label>
          <input
            id="first"
            {...register("name", { required: "Name cant be Empty" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="second">Age: </label>
          <input
            id="second"
            {...register("age", {
              min: {
                value: 10,
                message: "Manimum Age should be 10",
              },
              max: {
                value: 80,
                message: "Maximum age should be 80",
              },
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="third">Password: </label>
          <input id="third" {...register("Password")} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default Form;
