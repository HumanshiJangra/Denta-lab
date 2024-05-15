import Header from "../Components/Header";
import Breadcrums from "../Components/Breadcrums";
import ContactDetails from "../Components/ContactDetails";
import TableData from "../Components/TableData";
import { Link } from "react-router-dom";
import Description from "../Components/Description";
export default function Home() {
  const tableBodyData = [
    ['OK', '18', '17', '16', '15', '14', '13','12','11','21', '22', '23', '24', '25', '26', '27', '28'],
    ['UK', '48', '47', '46', '45', '44', '43','42','41','31', '32', '33', '34', '35', '36', '37', '38'],


    // Add more rows if needed
  ];
  return (
    <div>
      <Header />
      <section className="breadcrum-section pt-[64px] container mx-auto px-5">
        <div className="justify-between items-center flex">
          <p className='<div class="text-black text-2xl font-normal'>
            We ask for a cost estimate
          </p>
          <Breadcrums />
        </div>
      </section>
      <section className="form-element container mx-auto px-5 py-[80px]">
        <h2 className="text-black text-xl font-normal mb-[20px]">
          Please select your products
        </h2>
        <div className="fields">
          <form action="" className="from-value">
            <div className="grid grid-cols-3 gap-x-[38px]">
              <div className="flex flex-col">
                <label className="text-sm mb-[8px]">Price Range</label>
                <select className="border-field">
                  <option value="ExclusivBELKASSE">
                    {"Exclusiv (BEL/KASSE)"}
                  </option>
                  <option value="Preisgünstig">
                    Preisgünstig/ Laufer Zahntechnik
                  </option>
                </select>

                <label className="border-field flex justify-between items-center">
                  Hardship cases/ 100%
                  <input type="checkbox" name="myCheckbox" />
                </label>
                <label className="border-field flex justify-between items-center">
                  upper jaw
                  <input type="checkbox" name="myCheckbox" />
                </label>
                <label className="border-field flex justify-between items-center">
                  lower jaw
                  <input type="checkbox" name="myCheckbox" />
                </label>

                <label className="text-sm mb-[8px]">Unterkiefer</label>
                <select className="border-field">
                  <option value="yes">Ja</option>
                  <option value="no">Nein</option>
                </select>

                <label className="text-sm mb-[8px]">Gesichtsbogen</label>
                <select className="border-field">
                  <option value="digital">Digital</option>
                  <option value="Konventionell">Konventionell</option>
                </select>

                <label className="text-sm mb-[8px]"> Kronen- & Brückentechnik</label>
                <select className="border-field">
                  <option value="b">B</option>
                  <option value="">K</option>
                  <option value="">KB</option>
                  <option value="">BV</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm mb-[8px]"> Krankenkasse</label>
                <input className="border-field" type="text" name="" />
                <label className="text-sm mb-[8px]"> Implantatsystem</label>
                <input className="border-field" type="text" name="" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-[8px]">Material</label>
                <select className="border-field">
                  <option value="zirkon">Zirkon</option>
                  <option value="otherOption">NEM</option>
                  <option value="edelmetall">Edelmetall</option>
                  <option value="Presskeramik">Presskeramik</option>
                </select>
                <label className="border-field flex justify-between items-center">
                  Vollantom.
                  <input type="checkbox" name="myCheckbox" />
                </label>
                <label className="border-field flex justify-between items-center">
                  IOS Model
                  <input type="checkbox" name="myCheckbox"/>
                </label>
              </div>
            </div>
          <TableData tableBodyData={tableBodyData}  />
          <Description />
            <div className="flex flex-col">
            <label  className="text-sm mb-[8px]"> Bemerkungen</label>
            <textarea className="border-field" name="text" />
            </div>
          <ContactDetails />
          <div className="mt-[80px]">
            <button className="button"  type="submit">
             <Link to="/pdf" >Generate cost estimate </Link></button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
