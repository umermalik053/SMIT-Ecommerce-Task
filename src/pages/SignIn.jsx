import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";
import { auth, onAuthStateChanged, signInWithEmailAndPassword } from '../Firebase/firebase'

const SignIn = () => {
    const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (validateForm()) {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         navigate("/")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
        });
      
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
   
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F0F0F0]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">Sign In</h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-2 p-3 bg-[#F0F0F0] border ${
                errors.email ? "border-red-500" : "border-black"
              } rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-black"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col relative">
            <label
              htmlFor="password"
              className="text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-2 p-3 bg-[#F0F0F0] border ${
                errors.password ? "border-red-500" : "border-black"
              } rounded-lg focus:outline-none focus:ring-2 ${
                errors.password ? "focus:ring-red-500" : "focus:ring-black"
              }`}
              placeholder="Enter your password"
            />
            {/* Show/Hide Password Icon */}
            <div
              className="absolute right-2 top-[55px] transform -translate-y-1/2 text-black cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <AiOutlineEyeInvisible size={24} />
              ) : (
                <AiOutlineEye size={24} />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

        <p className="text-[#717171]">Don't Have An Account? <span className="text-black cursor-pointer"  onClick={()=>navigate("/SignUp")}>Sign Up</span> </p>
        

          {/* Login Button */}
          <button
          onClick={handleLogin}
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-[#F0F0F0] hover:text-black border border-black transition-all"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
