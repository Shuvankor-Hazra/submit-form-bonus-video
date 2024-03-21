// import PropTypes from 'prop-types';

import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!checkBox){
      return 
    }

    const user = {
      name: name,
      email: email,
      password: password
    }
    console.log(user)

    setIsSubmit(true)
  }

  return (
    <div className="w-full h-dvh flex items-center justify-center ">
      <form onSubmit={(e) => handleSubmit(e)} className="w-2/5 h-auto p-12 flex flex-col gap-4 bg-slate-300 rounded-2xl">
        <h1 className="text-3xl font-bold text-center">Sign Up Form</h1>

        <div>
          <label className="text-lg font-semibold ">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="text-lg font-semibold ">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="text-lg font-semibold ">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            required
          />
        </div>
        <span className="flex gap-2 mt-2">
          <input onChange={(e) => setCheckBox(e.target.checked)} type="checkbox" className="checkbox" />Agree with terms and condition?</span>

        <div className="flex justify-center mt-5">
          <button type="submit" className="btn text-xl font-bold text-center bg-base-200">Sign Up</button>
        </div>
      </form>
      {
        isSubmit && <div className="h-screen w-full absolute flex items-center justify-center ">
          <div className="bg-base-200 p-12 rounded-2xl text-center space-y-5 w-3/5 border-slate-500 border-8">
            <h3 className="font-bold text-5xl">Submitted Form Successfully !</h3>
            <p className="font-bold text-2xl">Mr/Mss: {name} </p>
            <p className="font-bold text-2xl">Email: {email} </p>
            <div>
              <form>
                <button className="btn bg-slate-300 font-bold text-xl">Close</button>
              </form>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

Registration.propTypes = {};

export default Registration;
