import InputForm from "./InputForm";
import "./style.css";
import Button from "./Button";
import Option from "./Option";
import { useState } from "react";

export default function Form({ setIsVisible, setMsg }) {
  let userData = {
    firstName: "",
    lastName: "",
    age: null,
    sex: null,
    phoneNumber: "",
    emailAdress: "",
    isEmployee: false,
    salaryType: "",
  };

  let [data, setData] = useState(userData);

  function handleInputChanger(event) {
    let newDataList = { ...data };
    const { name, type, value, checked } = event.target;
    setData({ ...newDataList, [name]: type === "checkbox" ? checked : value });
    console.log(event);
  }
  let isFormValid =
    data.firstName.trim() !== "" &&
    data.lastName.trim() !== "" &&
    data.age >= 18 &&
    data.age <= 90 &&
    data.sex !== "" &&
    data.phoneNumber !== "" &&
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.emailAdress);

  function handleSubmit(event) {
    event.preventDefault();
    setIsVisible(true);
    setMsg(`Your Form has been sent, Thank you ${data.firstName}`);
    console.log("clicked");
  }

  return (
    <div className="formBox">
      <div>
        <h4 style={{ texAlign: "center", marginTop: "0px" }}>
          Please Fill Your Personal Data
        </h4>
      </div>
      <form>
        <div className="row">
          <InputForm
            name="firstName"
            placeholder="Omar"
            label="First Name:"
            onChange={handleInputChanger}
            value={data.firstName}
          />
          <InputForm
            name="lastName"
            value={data.lastName}
            placeholder="ABD"
            label="Last Name:"
            onChange={handleInputChanger}
          />
        </div>
        <div className="row radio">
          <InputForm
            style={{ width: "50px" }}
            label="Female"
            type="radio"
            name="sex"
            value="female"
            checked={data.sex === "female"}
            onChange={handleInputChanger}
          />
          <InputForm
            style={{ width: "50px" }}
            label="Male"
            type="radio"
            name="sex"
            value="male"
            checked={data.sex === "male"}
            onChange={handleInputChanger}
          />

          <InputForm
            name="age"
            placeholder="18 - 80"
            style={{ flexShrink: 2, width: "30%" }}
            type="number"
            label="Age:"
            maxlength="2"
            min="18"
            max="80"
            onChange={handleInputChanger}
          />
        </div>
        <div className="row">
          <InputForm
            name="phoneNumber"
            label="Phone Number:"
            placeholder="+49 176 1215 235"
            style={{ width: "100%", marginLeft: "10%" }}
            maxlength="12"
            min="9"
            type="number"
            onChange={handleInputChanger}
          />
        </div>
        <div className="row">
          <InputForm
            name="emailAdress"
            label="Email Address:"
            placeholder="Example@info.com"
            type="email"
            style={{ width: "100%", marginLeft: "10%" }}
            onChange={handleInputChanger}
          />
        </div>
        <div className="row checkBox">
          <InputForm
            name="isEmployee"
            toLabel="employee"
            label="Are Your Employee? "
            type="checkbox"
            value={data.isEmployee}
            onChange={handleInputChanger}
          />
        </div>
        <div>
          <Option
            name="salaryType"
            toLabel="Salary"
            label="Select Your Salary: "
            defaultValue="0"
            onChange={handleInputChanger}
            children={
              <>
                <option value="0" disabled>
                  Chose from Options
                </option>
                <option value="type-1">Between 500€ - 1000€</option>
                <option value="type-2">Between 2500€ - 5000€</option>
                <option value="type-3">Between 5000€ - 10.000€</option>
                <option value="type-4">Between 10.000€ - 25.000€</option>
              </>
            }
          />
        </div>
        <div>
          <Button onClick={handleSubmit} disabled={!isFormValid} />
        </div>
      </form>
    </div>
  );
}
