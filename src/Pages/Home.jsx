import Header from "../Components/Header";
import TableNew from "../Components/TableNew";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Description from "../Components/Description";
import CustomTable from "../Components/CustomTable";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "male",
    subscriptions: {
      newsletter: false,
      updates: false,
      promotions: false,
    },
    hobbies: [],
    pricerange: "",
    facebow: "",
    typework: "",
    digital: "",
    health: "",
    implant: "",
    textarea: "",
    surname: "",
    houseno: "",
    postcode: "",
    location: "",
    yourmail: "",
    hardshipcase: false,
    upperjaw: false,
    lowerjaw: false,
    full: false,
    ios: false,
  });

  const [errors, setErrors] = useState({
    surname: "", // Error message for surname field
    // Other error messages...
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "subscriptions") {
        setFormData({
          ...formData,
          subscriptions: { ...formData.subscriptions, [value]: checked },
        });
      } else if (name === "hobbies") {
        if (checked) {
          setFormData({ ...formData, hobbies: [...formData.hobbies, value] });
        } else {
          setFormData({
            ...formData,
            hobbies: formData.hobbies.filter((hobby) => hobby !== value),
          });
        }
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (name === "material") {
      updateTableData(value);
    }
  };

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    updateTableData("zirkon");
  }, []);
  const updateTableData = (material) => {
    let data = [];
    switch (material) {
      case "zirkon":
        data = [
          { property: "hiiiii", value: "Humanshhiiiiiiii" },
          { property: "Color", value: "White" },
          { property: "Cost", value: "$200" },
        ];
        break;
      case "otherOption":
        data = [
          { property: "Strength", value: "Medium" },
          { property: "Color", value: "Grey" },
          { property: "Cost", value: "$150" },
        ];
        break;
      case "edelmetall":
        data = [
          { property: "Reactttttttttt", value: "Very High" },
          { property: "Color", value: "Gold" },
          { property: "Cost", value: "$300" },
        ];
        break;
      case "Presskeramik":
        data = [
          { property: "Strength", value: "High" },
          { property: "Color", value: "White" },
          { property: "Cost", value: "$250" },
        ];
        break;
      default:
        data = [];
    }
    setTableData(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation rules
    let newErrors = { ...errors };

    // Validate surname field
    const ctm_regex_lettes = /^[A-Za-z ]*$/;
    if (!formData.surname.trim()) {
      newErrors.surname = "Dieses Feld ist erforderlich";
    } else if (!ctm_regex_lettes.test(formData.surname)) {
      newErrors.surname = "Der Name darf nur Buchstaben enthalten";
    } else {
      newErrors.surname = "";
    }

    if (!formData.houseno.trim()) {
      newErrors.houseno = "Dieses Feld ist erforderlich";
    } else {
      newErrors.houseno = "";
    }

    if (!formData.postcode.trim()) {
      newErrors.postcode = "Dieses Feld ist erforderlich";
    } else if (!/^\d+$/.test(formData.postcode)) {
      newErrors.postcode = "Die Postleitzahl darf nur Zahlen enthalten";
    } else {
      newErrors.postcode = "";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Dieses Feld ist erforderlich";
    } else {
      newErrors.location = "";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Dieses Feld ist erforderlich";
    } else if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    } else {
      newErrors.email = "";
    }
    // Update errors state
    setErrors(newErrors);

    // Check if there are any validation errors
    if (Object.values(newErrors).some((error) => error !== "")) {
      // If there are validation errors, don't proceed with form submission
      return;
    }

    console.log("Hiiii These are the form data", formData);

    navigate("/pdf", { state: { formData } });
  };

  return (
    <div className="">
      <Header />
      <section className="breadcrum-section pt-[64px] container mx-auto px-5">
        <div className="justify-between items-center flex">
          <p className='<div class="text-black text-2xl font-normal'>
            We ask for a cost estimate
          </p>
          <div className="justify-center items-center gap-2.5 flex">
            <Link
              className="inline-block place-items-center grid w-[74px] h-[74px] bg-yellow-400 rounded-full text-white text-2xl font-semibold"
              to="/"
            >
              1
            </Link>
            <Link
              className="inline-block place-items-center grid w-[74px] h-[74px] bg-[#D1D1D1] rounded-full text-white text-2xl font-semibold"
              to="/pdf"
            >
              2
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5">
        <form action="" className="from-value">
          <div className="grid grid-cols-3 gap-x-[38px]">
            <div className="flex flex-col">
              <label className="text-sm mb-[8px]">Price Range</label>
              <select
                className="border-field"
                name="pricerange"
                value={formData.pricerange}
                onChange={handleChange}
              >
                <option value="ExclusivBELKASSE">
                  {"Exclusiv (BEL/KASSE)"}
                </option>
                <option value="Preisgünstig">
                  Preisgünstig/ Laufer Zahntechnik
                </option>
              </select>

              <label className="border-field flex justify-between items-center cursor">
                Hardship cases/ 100%
                <input
                  type="checkbox"
                  name="hardshipcase"
                  value="hardship"
                  checked={formData.subscriptions.hardship}
                  onChange={handleChange}
                />
              </label>
              <label className="border-field flex justify-between items-center cursor cursor">
                upper jaw
                <input
                  type="checkbox"
                  name="upperjaw"
                  value="upperJaw"
                  onChange={handleChange}
                />
              </label>
              <label className="border-field flex justify-between items-center cursor">
                lower jaw
                <input
                  type="checkbox"
                  name="lowerjaw"
                  value="lowerJaw"
                  onChange={handleChange}
                />
              </label>

              <label className="text-sm mb-[8px]">Gesichtsbogen</label>
              <select
                className="border-field"
                name="facebow"
                value={formData.facebow}
                onChange={handleChange}
              >
                <option value="yes">Ja</option>
                <option value="no">Nein</option>
              </select>

              <label className="text-sm mb-[8px]">Arbeitsart</label>
              <select
                className="border-field"
                name="typework"
                value={formData.typework}
                onChange={handleChange}
              >
                <option value="">Kronen- und Brückentechnik</option>
                <option value=""></option>
              </select>

              <label className="text-sm mb-[8px]">Digital/ konventionell</label>
              <select
                className="border-field"
                name="digital"
                value={formData.digital}
                onChange={handleChange}
              >
                <option value="digital">Digital</option>
                <option value="Konventionell">Konventionell</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-[8px]"> Krankenkasse</label>
              <input
                className="border-field"
                type="text"
                name="health"
                value={formData.health}
                onChange={handleChange}
              />
              <label className="text-sm mb-[8px]"> Implantatsystem</label>
              <input
                className="border-field"
                type="text"
                name="implant"
                value={formData.implant}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-[8px]">Material</label>
              <select
                className="border-field"
                name="material"
                value={formData.material}
                onChange={handleChange}
              >
                <option value="zirkon">Zirkon</option>
                <option value="otherOption">NEM</option>
                <option value="edelmetall">Edelmetall</option>
                <option value="Presskeramik">Presskeramik</option>
              </select>
              <label className="border-field flex justify-between items-center cursor">
                Vollantom.
                <input
                  type="checkbox"
                  name="full"
                  value="fullantom"
                  onChange={handleChange}
                />
              </label>
              <label className="border-field flex justify-between items-center cursor">
                IOS Model
                <input
                  type="checkbox"
                  name="ios"
                  value="iosm"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-[8px]"> Bemerkungen</label>
            <textarea
              className="border-field h-[150px]"
              name="textarea"
              value={formData.textarea}
              onChange={handleChange}
            />
          </div>

          <CustomTable />

          <Description />
        </form>
        <div className="w-[50%]">
          <h2 className="mb-[30px] mt-[80px]">Kontakt-Daten</h2>
          <form className="from-value-2" action="from-value  ">
            <div className="flex flex-col">
              <label className="text-sm mb-[8px]">Name *</label>
              <input
                className="border-field"
                type="text"
                name="surname"
                value={formData.surname}
                placeholder="Name"
                onChange={handleChange}
              />
              {errors.surname && (
                <span className="error">{errors.surname}</span>
              )}

              <label className="text-sm mb-[8px]">Straße & Hausnr. *</label>
              <input
                className="border-field"
                type="text"
                name="houseno"
                placeholder="Straße & Nr."
                value={formData.houseno}
                onChange={handleChange}
              />
              {errors.houseno && (
                <span className="error">{errors.houseno}</span>
              )}

              <div className="flex gap-[12px]">
                <div className="flex flex-col w-[50%]">
                  <label className="text-sm mb-[8px]">Postcode *</label>
                  <input
                    className="border-field"
                    type="text"
                    name="postcode"
                    placeholder="Straße & Nr."
                    value={formData.postcode}
                    onChange={handleChange}
                  />
                  {errors.postcode && (
                    <span className="error">{errors.postcode}</span>
                  )}
                </div>

                <div className="flex flex-col w-[50%]">
                  <label className="text-sm mb-[8px]">Ort *</label>
                  <input
                    className="border-field"
                    type="text"
                    name="location"
                    placeholder="Ort"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  {errors.location && (
                    <span className="error">{errors.location}</span>
                  )}
                </div>
              </div>
              <h2 className="mt-[36px] mb-[22px]">Zusätzliche Informationen</h2>
              <div className="flex gap-[12px]">
                <div className="flex flex-col w-[50%]">
                  <label className="text-sm mb-[8px]">Email Arzt *</label>
                  <input
                    className="border-field"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="flex flex-col w-[50%]">
                  <label className="text-sm mb-[8px]">Weitere Email</label>
                  <input
                    className="border-field"
                    type="email"
                    name="yourmail"
                    placeholder="Email"
                    value={formData.yourmail}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-[80px]">
                <button
                  onClick={handleSubmit}
                  className="button mr-4"
                  type="submit"
                >
                  Generate cost estimate
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
