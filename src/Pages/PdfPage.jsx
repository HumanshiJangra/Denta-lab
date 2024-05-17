import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Counter } from '../Features/Counter/Counter';
import PrintData from '../Components/PrintData';
import generatePDF from '../Pages/Sample'
export default function PdfPage() {
  // const generatePDF = () => {
  //   if (!showTable) {
  //     alert('Please print the data in table format first!');
  //     return;
  //   }

  //   const input = document.getElementById('form-table');

  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, 'PNG', 0, 0);
  //     pdf.save('form-data.pdf');
  //   });
  // };

  return (
    <div>
      <Header />
      <section className="breadcrum-section pt-[64px] container mx-auto px-5">
        <div className="justify-between items-center flex ">
          <p className="text-black text-2xl font-normal">Your estimate</p>
          <div className="justify-center items-center gap-2.5 flex">
            <Link className="inline-block place-items-center grid w-[74px] h-[74px] bg-[#D1D1D1] rounded-full text-white text-2xl font-semibold" to="/">1</Link>
            <Link className="inline-block place-items-center grid w-[74px] h-[74px] bg-yellow-400 rounded-full text-white text-2xl font-semibold" to="/pdf">2</Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5">
        <div className="py-[40px]">
          <h2>Ihr Kostenvoranschlag wurde erfolgreich generiert und an folgende Email Adressen geschickt.</h2>
        </div>
      {/* <Counter /> */}
      <PrintData />

      </section>

    </div>
  );
}
