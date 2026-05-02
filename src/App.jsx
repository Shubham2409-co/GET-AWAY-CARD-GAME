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
      <div style={styles.heading}>GET AWAY GAME!! ♠️</div>

      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "10px" }}>
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* LOGIN */}
        {isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            style={styles.input}
          />
        )}

        {/* REGISTER */}
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

        {/* PASSWORD */}
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

        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)} style={styles.link}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </form>
    </div>
  );
}

/* ✅ RESPONSIVE STYLES */
const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #141e30, #243b55)",
    flexDirection: "column",
    padding: "20px",
    boxSizing: "border-box",
    position: "relative",
  },

  heading: {
    position: "absolute",
    top: "20px",
    fontSize: "clamp(22px, 4vw, 36px)",
    fontWeight: "800",
    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "2px",
    textAlign: "center",
  },

  card: {
    background: "#fff",
    padding: "clamp(20px, 5vw, 30px)",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "380px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#243b55",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "16px",
  },

  link: {
    color: "#007bff",
    cursor: "pointer",
    marginLeft: "5px",
    fontWeight: "bold",
  },
};

export default AuthPage;
