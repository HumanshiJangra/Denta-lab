import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Header from "../Components/Header";
import TableNew from "../Components/TableNew";
import { Link } from "react-router-dom";
import logo from '../assets/image 7.png'
import { useNavigate } from 'react-router-dom';
const FormComponent = () => {
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
  };

  const generatePDF = () => {
    const input = document.getElementById("form-table");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("form-data.pdf");
    });
  };
  const handleSubmit = () => {
    navigate('/pdf', { state: { formData } });
  };
  return (
    <div className="container mx-auto px-5">
      <Header />
      <section className="breadcrum-section pt-[64px] container mx-auto px-5">
        <div className="justify-between items-center flex">
          <p className='<div class="text-black text-2xl font-normal'>
            We ask for a cost estimate
          </p>
          <div className='justify-center items-center gap-2.5 flex'>
      <Link className='inline-block place-items-center grid w-[74px] h-[74px] bg-yellow-400 rounded-full text-white text-2xl font-semibold' to="/" >1</Link>
      <Link className='inline-block place-items-center grid w-[74px] h-[74px] bg-[#D1D1D1] rounded-full text-white text-2xl font-semibold' to="/pdf" >2</Link>
    </div>
        </div>
      </section>
      <form action="" className="from-value py-[80px]">
        <div className="grid grid-cols-3 gap-x-[38px]">
          <div className="flex flex-col">
            <label className="text-sm mb-[8px]">Price Range</label>
            <select
              className="border-field"
              name="pricerange"
              value={formData.pricerange}
              onChange={handleChange}
            >
              <option value="ExclusivBELKASSE">{"Exclusiv (BEL/KASSE)"}</option>
              <option value="Preisgünstig">
                Preisgünstig/ Laufer Zahntechnik
              </option>
            </select>

            <label className="border-field flex justify-between items-center">
              Hardship cases/ 100%
              <input
                type="checkbox"
                name="hardshipcase"
                value="hardship"
                checked={formData.subscriptions.hardship}
                onChange={handleChange}
              />
            </label>
            <label className="border-field flex justify-between items-center">
              upper jaw
              <input
                type="checkbox"
                name="upperjaw"
                value="upperJaw"
                onChange={handleChange}
              />
            </label>
            <label className="border-field flex justify-between items-center">
              lower jaw
              <input
                type="checkbox"
                name="lowerjaw"
                value="lowerJaw"
                onChange={handleChange}
              />
            </label>

            <label className="text-sm mb-[8px]">Unterkiefer</label>
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

            <label className="text-sm mb-[8px]">Gesichtsbogen</label>
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
            <label className="border-field flex justify-between items-center">
              Vollantom.
              <input
                type="checkbox"
                name="full"
                value="fullantom"
                onChange={handleChange}
              />
            </label>
            <label className="border-field flex justify-between items-center">
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
            className="border-field"
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
          />
        </div>
        <div className="w-[50%]">
          <h2 className="mb-[30px] mt-[80px]">Kontakt-Daten</h2>
          <form className="" action="from-value">
            <div className="flex flex-col">
              <label className="text-sm mb-[8px]">Surname *</label>
              <input
                className="border-field"
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />

              <label className="text-sm mb-[8px]">House no. *</label>
              <input
                className="border-field"
                type="text"
                name="houseno"
                value={formData.houseno}
                onChange={handleChange}
              />

              <div className="flex gap-[12px]">
                <div className="flex flex-col w-[50%]">
                  <label className="text-sm mb-[8px]">Postcode *</label>
                  <input
                    className="border-field"
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col w-[50%]">
                  <label className="text-sm mb-[8px]">Location *</label>
                  <input
                    className="border-field"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <h2 className="mt-[36px] mb-[22px]">Zusätzliche Informationen</h2>
              <div className="flex gap-[12px]">
                <div className="flex flex-col w-[50%]">
                  <label className="text-sm mb-[8px]">Email doctor *</label>
                  <input
                    className="border-field"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col w-[50%]">
                  <label className="text-sm mb-[8px]">More email</label>
                  <input
                    className="border-field"
                    type="text"
                    name="yourmail"
                    value={formData.yourmail}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </form>
      <div>
        <div className="mt-[80px]">
          <button onClick={handleSubmit} className="button mr-4" type="submit">
            Generate cost estimate
          </button>
          {/* <button onClick={generatePDF} className="button" type="submit">
            Submit
          </button> */}
        </div>
      </div>
      <div>
        <h1 className="text-[40px] text-[red] text-center">Form Data</h1>
        <table className="w-full" id="form-table">
          <tbody>
            <tr>
              <td>Pricerange</td>
              <td>{formData.pricerange}</td>
            </tr>
            <tr>
              <td>Facebow</td>
              <td>{formData.facebow}</td>
            </tr>
            <tr>
              <td>Typework</td>
              <td>{formData.typework}</td>
            </tr>
            <tr>
              <td>Digital</td>
              <td>{formData.digital}</td>
            </tr>
            <tr>
              <td>Health</td>
              <td>{formData.health}</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>{formData.material}</td>
            </tr>
            <tr>
              <td>Implant</td>
              <td>{formData.implant}</td>
            </tr>
            <tr>
              <td>Notes</td>
              <td>{formData.textarea}</td>
            </tr>
            <tr>
              <td>House no.</td>
              <td>{formData.houseno}</td>
            </tr>
            <tr>
              <td>Surname</td>
              <td>{formData.surname}</td>
            </tr>
            <tr>
              <td>Postcode</td>
              <td>{formData.postcode}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{formData.location}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <td>Your mail</td>
              <td>{formData.yourmail}</td>
            </tr>
            <tr>
              <td>Hardship case</td>
              <td>{formData.hardshipcase ? "Selected" : "Not Selected"}</td>
            </tr>
            <tr>
              <td>Upper jaw</td>
              <td>{formData.upperjaw ? "Selected" : "Not Selected"}</td>
            </tr>
            <tr>
              <td>Lower jaw</td>
              <td>{formData.lowerjaw ? "Selected" : "Not Selected"}</td>
            </tr>
            <tr>
              <td>Fullantom</td>
              <td>{formData.full ? "Selected" : "Not Selected"}</td>
            </tr>
            <tr>
              <td>IOS Model</td>
              <td>{formData.ios ? "Selected" : "Not Selected"}</td>
            </tr>
            {Object.entries(formData.subscriptions).map(
              ([key, value]) =>
                value && (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>Selected</td>
                  </tr>
                )
            )}
            {formData.hobbies.map((hobby) => (
              <tr key={hobby}>
                <td>{hobby}</td>
                <td>Selected</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TableNew />
    </div>
  );
};

export default FormComponent;
