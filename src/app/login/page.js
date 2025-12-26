"use client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import classes from "./login.module.css"

function LoginPage() {
  const router = useRouter()
  const [formValues, setFormValue] = useState({ email: "", password: "" })

  const validate = () => {
    let err = {}
    if (!formValues.email) err.email = "Email is Required"
    if (!formValues.password) {
      err.password = "Password is Required"
    } else if (formValues.password.length < 6) {
      err.password = "Password should be at least 6 characters long"
    }
    return err
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    let err = validate()
    if (Object.keys(err).length > 0) return

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.ok) {
      router.push("/dashboard")
    } else {
      alert("Login Failed")
    }
  }

  return (
    <div className={classes.page}>
      <div className={classes.card}>
        <h2 className={classes.title}>Login</h2>

        <form className={classes.form} onSubmit={formSubmitHandler}>
          <div className={classes.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValue({ ...formValues, email: e.target.value })
              }
              className={classes.input}
            />
          </div>

          <div className={classes.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              value={formValues.password}
              onChange={(e) =>
                setFormValue({ ...formValues, password: e.target.value })
              }
              className={classes.input}
            />
          </div>

          <button type="submit" className={classes.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
