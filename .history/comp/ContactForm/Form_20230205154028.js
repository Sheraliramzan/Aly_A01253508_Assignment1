import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Form() {
  const [fNError, setFNError] = useState("");
  const [lNError, setLNError] = useState("");
  const [emError, setEmError] = useState("");
  const [button, setButton] = useState(false);

  const [fNVal, setFNVal] = useState("");
  const [lNVal, setLNVal] = useState("");
  const [emVal, setEmVal] = useState("");

  const handleFirst = (e) => {
    const fName = e.target.value;
    // check if first letter is capital
    if (
      fName !== "" &&
      fName.split("")[0] === fName.split("")[0].toUpperCase()
    ) {
      setFNError("");
    } else {
      setFNError(
        "First name error. First letter must be capital. Must use alphabets only."
      );
    }
    setFNVal(fName);
  };

  const handleLast = (e) => {
    const last = e.target.value;
    // check if first letter is capital
    if (
      last !== "" &&
      last.split("")[0] === last.split("")[0].toUpperCase()
    ) {
      setLNError("");
    } else {
      setLNError(
        "Last name error. First letter must be capital. Must use alphabets only."
      );
    }
    setLNVal(last);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    // check if email is valid
    if (email.includes("@") && email.includes(".")) {
      setEmError("");
    } else {
      setEmailError("Email is Invalid");
    }
    setEmailVal(email);
  };

  useEffect(() => {
    if (
      fNError === "" &&
      lNError === "" &&
      emailError === "" &&
      fNVal !== "" &&
      lNVal !== "" &&
      emailVal !== ""
    ) {
      setButton(true);
    } else {
      setButton(false);
    }
  });

  useEffect(() => {
    if (fNVal === "") {
      setFNError("");
    }
    if (lNVal === "") {
      setLNError("");
    }
    if (emailVal === "") {
      setEmailError("");
    }
  });

  return (
    <>
      <div className="formcont">
        <form>
          <fieldset>
            <table>
              <thead>
                <tr className="namecont">
                  <td>
                    <label for="Name">First Name:</label>
                    <input
                      placeholder="First Name Here"
                      value={fNVal}
                      onChange={handleFirst}
                    />
                  </td>
                  <td>
                    <label for="Name">Last Name:</label>
                    <input
                      placeholder="Last Name Here"
                      value={lNVal}
                      onChange={handleLast}
                    />
                  </td>
                </tr>
              </thead>
              <thead>
                <tr className="emailcont">
                  <td className="email-td">
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
            <span className="error">{fNError}</span>
            <span className="error">{lNError}</span>
            <span className="error">{emailError}</span>
          </div>
        </form>
      </div>
    </>
  );
}