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
       <p className="pb-[40px]">{formData.email}</p>
      {formData ? (
        <div id="pdf-content" className="text-[#888989] px-12 main relative">
         
          <div className="absolute w-[40%] p-5 bg-[#FFD402] top-0 left-0 ">
            <p className=" text-white text-sm text-center">HIGH-TECH-MADE IN GERMANY</p>
          </div>
          <div className="pt-28 grid grid-cols-2 ">
            <div className="left">
              <p className="font-medium my-5">
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
            <div className="right text-right ">
              <img className="max-w-[200px] ml-auto " src={logo} alt="" />
              <h2 className="mt-4 font-bold">Tel.: 0621 48 488 0</h2>
              <h2 className="font-bold">Mail: <a href="kontakt@laufer-zahntechnik.de">kontakt@laufer-zahntechnik.de</a></h2>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <p className="w-[60%]">
              Patient:............................................................................
            </p>
            <p className="">Datum:............................................
         
            </p>
          </div>
          <div className="checkbox-form grid grid-cols-2 gap-5">
            <div className="left justify-between flex gap-4">
              <div className="w-[30%]">
              <div className="checkboxes">
              <label>
                EXCLUSIVE <br/>(BEL/Kasse)
                {formData.pricerange === "ExclusivBELKASSE" && (
                <input type="checkbox" name="ExclusivBELKASSE" 
                checked={formData.pricerange === "ExclusivBELKASSE"}
                id="" />
                )}
              </label>
              
              </div>
              <div className="checkboxes">
              <label>
              Preisgünstig/ <br/>Laufer Zahntechnik
                {formData.pricerange === "Preisgünstig" && (
                <input type="checkbox" name="Preisgünstig" 
                checked={formData.pricerange === "Preisgünstig"}
                id="" />
                )}
              </label>
              </div>
              </div>
              <div>
                <h2>Krankenkasse</h2>
                  <p className="border-solid border-[#878282] border-b-2 ">{formData.health}</p>
                <h2>Implantatsystem</h2>
                <p>{formData.implant}</p>
              </div>
            </div>
            <div className="right">
              <p>Material:
              {/* {formData.material} */}
              </p>
              <div className="grid grid-cols-2">
                <div className="checkboxes">
              <label className="">
              Edelmetall:   </label>
              {formData.material === "edelmetall" && (
                <input
                  type="checkbox"
                  name="edelmetall"
                  checked={formData.material === "edelmetall"}
                />
              )}
              </div>
            <div className="checkboxes">
              <label className="">
                NEM:
                </label>
                {formData.material === "nem" && (
                <input
                  type="checkbox"
                  name="otherOption"
                  checked={formData.material === "otherOption"}
                />
              )}
           </div>
           <div className="checkboxes">
              <label className="">
              Presskeramik:
              </label>
              {formData.material === "Presskeramik" && (
                <input
                  type="checkbox"
                  name="Presskeramik"
                  checked={formData.material === "Presskeramik"}
                />
              )}
             </div>
             <div className="checkboxes">
              <label className="">
              Zirkon:
              </label>
              {formData.material === "zirkon" && (
                <input
                  type="checkbox"
                  name="zirkon"
                  checked={formData.material === "zirkon"}
                />
              )}
              </div>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>

<TableNew tableData={formData.tableData} isPrintMode={true} />

         
          <Description />
          <textarea
            className="h-[200px] border-solid border-[grey] border-[1px] w-full p-2"
            name=""
            id=""
          ></textarea>
          {/* <p>{formData.surname}</p>
          <p>{formData.pricerange}</p>
          <p>{formData.houseno}</p>
          <p>{formData.email}</p>
          <p>{formData.yourmail}</p> */}
        </div>
      ) : (
        <p>No data available</p>
      )}
      <div className="text-right px-12">
      <button
        onClick={downloadPdf}
        className="button margin-left"
        type="submit"
      >
        PDF Herunterladen
      </button>
      </div>
    </div>
  );
}
