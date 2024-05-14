import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import Header from "../Components/Header";
import Breadcrums from "../Components/Breadcrums";

export default function Home() {
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
      <section className="form-element container mx-auto px-5 pt-[80px]">
        <h2 className="text-black text-xl font-normal mb-[20px]">
          Please select your products
        </h2>
        <div className="fields">
          <form action="" className="from-value">
            <div className="grid grid-cols-3 gap-x-[38px]">
              <div className="flex flex-col">
                <label className="text-sm">Price Range</label>
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

                <label className="text-sm">Unterkiefer</label>
                <select className="border-field">
                  <option value="yes">Ja</option>
                  <option value="no">Nein</option>
                </select>

                <label className="text-sm">Gesichtsbogen</label>
                <select className="border-field">
                  <option value="digital">Digital</option>
                  <option value="Konventionell">Konventionell</option>
                </select>

                <label> Kronen- & Brückentechnik</label>
                <select className="border-field">
                  <option value="b">B</option>
                  <option value="">K</option>
                  <option value="">KB</option>
                  <option value="">BV</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label> Krankenkasse</label>
                <input className="border-field" type="text" name="" />
                <label> Implantatsystem</label>
                <input className="border-field" type="text" name="" />
              </div>
              <div className="flex flex-col">
                <label>Material</label>
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
                  <span></span>
                </label>
              </div>
            </div>
            <label> Bemerkungen</label>
            <textarea className="border-field" name="text" />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>
    </div>
  );
}
