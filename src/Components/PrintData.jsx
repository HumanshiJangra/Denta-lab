import React from "react";
import logo from "../assets/image 7.png";
import { useLocation } from "react-router-dom";
import TableNew from "../Components/TableNew";
import Description from "./Description";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PrintData() {
  const location = useLocation();
  const { formData, tableData } = location.state || {};

  const downloadPdf = () => {
    const userConfirmed = window.confirm("Do you want to download the PDF?");
    if (userConfirmed) {
      const element = document.getElementById("pdf-content");
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("document.pdf");
      });
    }
  };
  return (
    <div className="container mx-auto px-5">
      {formData ? (
        <div id="pdf-content" className="text-[#888989] px-12 main relative">
          <div className="absolute w-[40%] p-5 bg-[#FFD402] top-0 left-0 ">
            <p className=" text-white text-sm ">HIGH-TECH-MADE IN GERMANY</p>
          </div>
          <div className="pt-28 grid grid-cols-2 ">
            <div className="left">
              <p className="font-medium">
                {" "}
                <span className="bg-[#FFD402] h-3 w-3 mr-2 inline-block "></span>
                Wir bitten um Kostenvoranschlag
              </p>
              <div className="box h-[200px] my-10 border-solid border-[grey] border-[2px] p-4">
                <p>Name: {formData.surname}</p>
                <p>Adresse: {formData.houseno}</p>

                <p>Email: {formData.email}</p>
              </div>
            </div>
            <div className="right">
              <img className="max-w-[200px] ml-auto " src={logo} alt="" />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="w-[60%]">
              Patient:............................................................................
            </p>
            <p className="w-[40%]">Datum:.....................</p>
          </div>
          <div className="checkbox-form grid grid-cols-2">
            <div className="left">
              <p>
                EXCLUSIVE(BEL/Kasse) <span></span>
              </p>
            </div>
            <div className="right">
              <p>Material:</p>
              <div>
                <p></p>
              </div>
            </div>
          </div>

          <TableNew tableData={tableData} />
          <Description />
          <textarea
            className="h-[200px] border-solid border-[grey] border-[1px] w-full p-2"
            name=""
            id=""
          ></textarea>
          <p>Hiiiiiiiiiiiiiiiiiii::::{formData.surname}</p>
          <p>{formData.pricerange}</p>
          <p>{formData.houseno}</p>
          <p>{formData.email}</p>
          <p>{formData.yourmail}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
      <button
        onClick={downloadPdf}
        className="button margin-left"
        type="submit"
      >
        PDF Herunterladen
      </button>
    </div>
  );
}
