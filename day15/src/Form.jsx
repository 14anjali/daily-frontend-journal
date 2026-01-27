import { useState } from "react";


function Form() {
    const [acceptTerms,setAcceptTerms]=useState(false)
    const options=[
        {label:'India',value:'india'},
        {label:'USA',value:'usa'},
        {label:'Japan',value:'japan'}
    ]
    const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({

    name: "",
    email: "",
  gender:"",
  fruit:""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors={}
  if(!formData.name){
    newErrors.name="Name is required"
  }
  if(!formData.email){
    newErrors.email="Email is required"
  }
  if(formData.email.length<8){
    newErrors.email="Email length must be greater then 8"
  }
  if(!acceptTerms){
    newErrors.terms="you must accept the terms"
  }
  if(!formData.gender){
    newErrors.gender="Gender is required"
  }
  if(!formData.fruit){
    newErrors.fruit="fruit is required"
  }
  if(Object.keys(newErrors).length>0){
    setErrors(newErrors)
    return
  }
  setErrors({})
    console.log(formData);

    setFormData({ name: "", email: "",gender:"",fruit:"" });
    setAcceptTerms(false)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

     {errors.name && <p>{errors.name}</p>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          minLength={8}
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      {errors.email && <p>{errors.email}</p>}
<div>
    <p>Gender:</p>
    <label>
        <input type="radio" 
        name="gender"
        value="male"
        checked={formData.gender==="male"}
        onChange={handleChange}
        />Male:
    </label>
    <label>
        <input type="radio" 
        name="gender"
        value="female"
        checked={formData.gender==="female"}
        onChange={handleChange}
        />Female:
    </label>
    <label>
        <input type="radio" 
        name="gender"
        value="other"
        checked={formData.gender==="other"}
        onChange={handleChange}
        />other:
    </label>
    {errors.gender && <p>{errors.gender}</p>}
</div>
<div>
    <label htmlFor="fruits">Fruits</label>
        <select  id="fruits" 
        name="fruit"
        value={formData.fruit} 
        onChange={handleChange}>
            <option value="">Select fruit</option>
{options.map((option)=>(
    <option key={option.value} value={option.value}>
        {option.label}
    </option>
))}
        </select>
   {errors.fruit && <p>{errors.fruit}</p>}
</div>
    <div>
        <label htmlFor="terms">
    <input
      id="terms"
      type="checkbox"
      checked={acceptTerms}
      onChange={(e) => setAcceptTerms(e.target.checked)}
    />
    Accept Terms
  </label>
  {errors.terms && <p>{errors.terms}</p>}
  </div>
      <button type="submit" disabled={!acceptTerms}>Submit</button>
    </form>
  );
}

export default Form;
