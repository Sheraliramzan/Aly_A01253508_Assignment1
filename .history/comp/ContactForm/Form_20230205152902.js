import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Form() {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [button, setButton] = useState(false);

  const [firstNameVal, setFirstNameVal] = useState("");
  const [lastNameVal, setLastNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");

  const handleFirstName = (e) => {
    const firstName = e.target.value;
    // check if first letter is capital
    if (
      firstName !== "" &&
      firstName.split("")[0] === firstName.split("")[0].toUpperCase()
    ) {
      setFirstNameError("");
    } else {
      setFirstNameError(
        "First name error. First letter must be capital. Must use alphabets only."
      );
    }
    setFirstNameVal(firstName);
  };

  const handleLastName = (e) => {
    const lastName = e.target.value;
    // check if first letter is capital
    if (
      lastName !== "" &&
      lastName.split("")[0] === lastName.split("")[0].toUpperCase()
    ) {
      setLastNameError("");
    } else {
      setLastNameError(
        "Last name error. First letter must be capital. Must use alphabets only."
      );
    }
    setLastNameVal(lastName);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    // check if email is valid
    if (email.includes("@") && email.includes(".")) {
      setEmailError("");
    } else {
      setEmailError("Email is Invalid");
    }
    setEmailVal(email);
  };

  useEffect(() => {
    if (
      firstNameError === "" &&
      lastNameError === "" &&
      emailError === "" &&
      firstNameVal !== "" &&
      lastNameVal !== "" &&
      emailVal !== ""
    ) {
      setButton(true);
    } else {
      setButton(false);
    }
  });

  useEffect(() => {
    if (firstNameVal === "") {
      setFirstNameError("");
    }
    if (lastNameVal === "") {
      setLastNameError("");
    }
    if (emailVal === "") {
      setEmailError("");
    }
  });

  return (
    <>
      <div className="form-container">
        <form>
          <fieldset>
            <table>
              <thead>
                <tr className="name-cont">
                  <td>
                    <label for="Name">First Name:</label>
                    <input
                      placeholder="First Name Here"
                      value={firstNameVal}
                      onChange={handleFirstName}
                    />
                  </td>
                  <td>
                    <label for="Name">Last Name:</label>
                    <input
                      placeholder="Last Name Here"
                      value={lastNameVal}
                      onChange={handleLastName}
                    />
                  </td>
                </tr>
              </thead>
              <thead>
                <tr className="email-cont">
                  <td colSpan="2" className="email-td">
                    <label for="Name">Email:</label>
                    <input
                      placeholder="Email Here"
                      value={emailVal}
                      onChange={handleEmail}
                    />
                  </td>
                </tr>
              </thead>
            </table>
          </fieldset>
          <div className="submitcont">
            {button && (
              <Link href="/">
                <button className="submit">Submit</button>
              </Link>
            )}
          </div>
          <div className="errcont">
            <span className="error">{firstNameError}</span>
            <span className="error-msg">{lastNameError}</span>
            <span className="error-msg">{emailError}</span>
          </div>
        </form>
      </div>
    </>
  );
}