import React, { useState } from "react";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const redirectToGame = () => {
    window.location.href =
      "https://shubham2409-co.github.io/GET-AWAY-GAME/";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (isLogin) {
      // LOGIN
      if (
        savedUser &&
        savedUser.username === formData.username &&
        savedUser.password === formData.password
      ) {
        localStorage.setItem("loggedInUser", formData.username);
        redirectToGame();
      } else {
        alert("Invalid username or password");
      }
    } else {
      // REGISTER
      if (
        !formData.username ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.phone ||
        !formData.email ||
        !formData.password
      ) {
        alert("Please fill all fields");
        return;
      }

      localStorage.setItem("user", JSON.stringify(formData));
      localStorage.setItem("loggedInUser", formData.username);

      alert("Registration Successful!");
      redirectToGame();
    }
  };

  return (
    <div style={styles.container}>
      {/* HEADING */}
      <div style={styles.heading}>GET AWAY GAME!! ♠️</div>

      {/* FORM */}
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Register"}</h2>

        {/* LOGIN FIELD */}
        {isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            style={styles.input}
          />
        )}

        {/* REGISTER FIELDS */}
        {!isLogin && (
          <>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Gmail"
              onChange={handleChange}
              style={styles.input}
            />
          </>
        )}

        {/* COMMON PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          {isLogin ? "Login" : "Register"}
        </button>

        {/* TOGGLE */}
        <p style={{ marginTop: "10px" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)} style={styles.link}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </form>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  container: {
    height: "100vh",
    width:"100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #141e30, #243b55)",
    flexDirection: "column",
  },
  heading: {
    position: "absolute",
    top: "40px",
    fontSize: "36px",
    fontWeight: "800",
    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "3px",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#243b55",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
    marginLeft: "5px",
    fontWeight: "bold",
  },
};

export default AuthPage;