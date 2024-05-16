import Header from "../Components/Header";
import ContactDetails from "../Components/ContactDetails";
import TableData from "../Components/TableData";
import { Link } from "react-router-dom";

import { useState } from "react";
import Description from "../Components/Description";
import TableNew from "../Components/TableNew";
export default function Home() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: 'male',
    subscription: [],
  }); 

  const [showTable, setShowTable] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedSubscriptions = checked
        ? [...formData.subscription, value]
        : formData.subscription.filter((item) => item !== value);
      setFormData({ ...formData, subscription: updatedSubscriptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const printData = () => {
    setShowTable(true);
  };

  return (
    <div>
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
      <section className="form-element container mx-auto px-5 py-[80px]">
        <h2 className="text-black text-xl font-normal mb-[20px]">
          Please select your products
        </h2>
        <div className="fields">

          {/* FORM START ------------------------------------------- */}
          <form action="" className="from-value">
            <div className="grid grid-cols-3 gap-x-[38px]">
              <div className="flex flex-col">
                <label className="text-sm mb-[8px]">Price Range</label>
                <select className="border-field" name="pricerange" value={formData.pricerange} onChange={handleChange}>
                  <option value="ExclusivBELKASSE">
                    {"Exclusiv (BEL/KASSE)"}
                  </option>
                  <option value="Preisgünstig">
                    Preisgünstig/ Laufer Zahntechnik
                  </option>
                </select>

                <label className="border-field flex justify-between items-center">
                  Hardship cases/ 100%
                  <input type="checkbox" name="hardshipcase" value="hardship"
            onChange={handleChange} />
                </label>
                <label className="border-field flex justify-between items-center">
                  upper jaw
                  <input type="checkbox" name="upperjaw" value="upperJaw" onChange={handleChange} />
                </label>
                <label className="border-field flex justify-between items-center">
                  lower jaw
                  <input type="checkbox" name="lowerjaw" value="lowerJaw"  onChange={handleChange}/>
                </label>

                <label className="text-sm mb-[8px]">Unterkiefer</label>
                <select className="border-field" name="facebow" value={formData.facebow} onChange={handleChange}>
                  <option value="yes">Ja</option>
                  <option value="no">Nein</option>
                </select>

                <label className="text-sm mb-[8px]">Arbeitsart</label>
                <select className="border-field" name="typework" value={formData.typework} onChange={handleChange}>
                  <option value="">Kronen- und Brückentechnik</option>
                  <option value=""></option>
                </select>

                <label className="text-sm mb-[8px]">Gesichtsbogen</label>
                <select className="border-field" name="digital" value={formData.digital} onChange={handleChange}>
                  <option value="digital">Digital</option>
                  <option value="Konventionell">Konventionell</option>
                </select>

              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-[8px]"> Krankenkasse</label>
                <input className="border-field" type="text" name="health" value={formData.health} onChange={handleChange} />
                <label className="text-sm mb-[8px]"> Implantatsystem</label>
                <input className="border-field" type="text" name="implant" value={formData.implant} onChange={handleChange}/>
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-[8px]">Material</label>
                <select className="border-field" name="material" value={formData.material} onChange={handleChange}>
                  <option value="zirkon">Zirkon</option>
                  <option value="otherOption">NEM</option>
                  <option value="edelmetall">Edelmetall</option>
                  <option value="Presskeramik">Presskeramik</option>
                </select>
                <label className="border-field flex justify-between items-center">
                  Vollantom.
                  <input type="checkbox" name="full" value="fullantom"
            onChange={handleChange} />
                </label>
                <label className="border-field flex justify-between items-center">
                  IOS Model
                  <input type="checkbox" name="ios" value="iosm"
            onChange={handleChange}/>
                </label>
              </div>
            </div>
          <TableNew />
          <Description />
            <div className="flex flex-col">
            <label  className="text-sm mb-[8px]"> Bemerkungen</label>
            <textarea className="border-field" name="text" />
            </div>
            <div className="w-[50%]">
        <h2 className="mb-[30px] mt-[80px]">Kontakt-Daten</h2>
      <form className="" action="">
        <div className="flex flex-col">
          <label className="text-sm mb-[8px]">Surname *</label>
          <input className="border-field" type="text" name="" />

          <label className="text-sm mb-[8px]">House no. *</label>
          <input className="border-field" type="text" name="" />

          <div className="flex gap-[12px]">
            <div className="flex flex-col w-[50%]">
              <label className="text-sm mb-[8px]">Postcode *</label>
              <input className="border-field" type="text" name="" />
            </div>

            <div className="flex flex-col w-[50%]">
              <label className="text-sm mb-[8px]">Location *</label>
              <input className="border-field" type="text" name="" />
            </div>
          </div>
            <h2 className="mt-[36px] mb-[22px]">Zusätzliche Informationen</h2>
          <div className="flex gap-[12px]">
            <div className="flex flex-col w-[50%]">
              <label className="text-sm mb-[8px]">Email doctor *</label>
              <input className="border-field" type="text" name="" />
            </div>

            <div className="flex flex-col w-[50%]">
              <label className="text-sm mb-[8px]">More email</label>
              <input className="border-field" type="text" name="" />
            </div>
          </div>
        </div>
      </form>
    </div>
          <div className="mt-[80px]">
            <button onClick={printData} className="button"  type="submit">Generate cost estimate</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
