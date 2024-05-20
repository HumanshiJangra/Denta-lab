import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'; // Import Yup for validation
import Header from "../Components/Header";
import TableNew from "../Components/TableNew";
import { Link } from 'react-router-dom';
import Description from "../Components/Description";

// Define the validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  age: Yup.number().required('Age is required'),
  gender: Yup.string().required('Gender is required'),
  // Add validation for other fields as needed
  surname: Yup.string().required('Surname is required'),
  houseno: Yup.string().required('House no. is required'),
  postcode: Yup.string().required('Post code is required'),
  location: Yup.string().required('Location is required'),
  yourmail: Yup.string().email('Invalid email address').required('Your e-mail is required')
});

const HomeNew = () => {
  const navigate = useNavigate();
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

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema, // Add the validation schema
    onSubmit: (values) => {
      console.log("These are the form data", values);
      navigate('/pdf', { state: { formData: values } });
    },
  });

  return (
    <div className="">
      <Header />
      <section className="breadcrum-section pt-[64px] container mx-auto px-5">
        <div className="justify-between items-center flex">
          <p className='text-black text-2xl font-normal'>
            We ask for a cost estimate
          </p>
          <div className='justify-center items-center gap-2.5 flex'>
            <Link className='inline-block place-items-center grid w-[74px] h-[74px] bg-yellow-400 rounded-full text-white text-2xl font-semibold' to="/" >1</Link>
            <Link className='inline-block place-items-center grid w-[74px] h-[74px] bg-[#D1D1D1] rounded-full text-white text-2xl font-semibold' to="/pdf" >2</Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5">
        <form onSubmit={formik.handleSubmit} className="form-value py-[80px]">
          <div className="grid grid-cols-3 gap-x-[38px]">
            <div className="flex flex-col">
              <label className="text-sm mb-[8px]">Price Range</label>
              <select
                className="border-field"
                name="pricerange"
                value={formik.values.pricerange}
                onChange={formik.handleChange}
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
                  checked={formik.values.hardshipcase}
                  onChange={formik.handleChange}
                />
              </label>
              <label className="border-field flex justify-between items-center">
                Upper jaw
                <input
                  type="checkbox"
                  name="upperjaw"
                  checked={formik.values.upperjaw}
                  onChange={formik.handleChange}
                />
              </label>
              <label className="border-field flex justify-between items-center">
                Lower jaw
                <input
                  type="checkbox"
                  name="lowerjaw"
                  checked={formik.values.lowerjaw}
                  onChange={formik.handleChange}
                />
              </label>

              <label className="text-sm mb-[8px]">Unterkiefer</label>
              <select
                className="border-field"
                name="facebow"
                value={formik.values.facebow}
                onChange={formik.handleChange}
              >
                <option value="yes">Ja</option>
                <option value="no">Nein</option>
              </select>

              <label className="text-sm mb-[8px]">Arbeitsart</label>
              <select
                className="border-field"
                name="typework"
                value={formik.values.typework}
                onChange={formik.handleChange}
              >
                <option value="">Kronen- und Brückentechnik</option>
                <option value=""></option>
              </select>

              <label className="text-sm mb-[8px]">Gesichtsbogen</label>
              <select
                className="border-field"
                name="digital"
                value={formik.values.digital}
                onChange={formik.handleChange}
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
                value={formik.values.health}
                onChange={formik.handleChange}
              />
              {formik.touched.health && formik.errors.health ? (
                <div className="text-red-500 text-sm">{formik.errors.health}</div>
              ) : null}
              <label className="text-sm mb-[8px]"> Implantatsystem</label>
              <input
                className="border-field"
                type="text"
                name="implant"
                value={formik.values.implant}
                onChange={formik.handleChange}
              />
              {formik.touched.implant && formik.errors.implant ? (
                <div className="text-red-500 text-sm">{formik.errors.implant}</div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-[8px]">Material</label>
              <select
                className="border-field"
                name="material"
                value={formik.values.material}
                onChange={(e) => {
                  formik.handleChange(e);
                  updateTableData(e.target.value);
                }}
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
                  checked={formik.values.full}
                  onChange={formik.handleChange}
                />
              </label>
              <label className="border-field flex justify-between items-center">
                IOS Model
                <input
                  type="checkbox"
                  name="ios"
                  checked={formik.values.ios}
                  onChange={formik.handleChange}
                />
              </label>
            </div>
          </div>
          
          <Description />

          <div className="grid grid-cols-2 gap-x-[38px]">
            <div className="flex flex-col">
              <label className="text-sm mb-[8px]">Your Name *</label>
              <input
                className="border-field"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}

              <label className="text-sm mb-[8px]">Your Surname *</label>
              <input
                className="border-field"
                type="text"
                name="surname"
                value={formik.values.surname}
                onChange={formik.handleChange}
              />
              {formik.touched.surname && formik.errors.surname ? (
                <div className="text-red-500 text-sm">{formik.errors.surname}</div>
              ) : null}

              <label className="text-sm mb-[8px]">House no. *</label>
              <input
                className="border-field"
                type="text"
                name="houseno"
                value={formik.values.houseno}
                onChange={formik.handleChange}
              />
              {formik.touched.houseno && formik.errors.houseno ? (
                <div className="text-red-500 text-sm">{formik.errors.houseno}</div>
              ) : null}

              <label className="text-sm mb-[8px]">Post code *</label>
              <input
                className="border-field"
                type="text"
                name="postcode"
                value={formik.values.postcode}
                onChange={formik.handleChange}
              />
              {formik.touched.postcode && formik.errors.postcode ? (
                <div className="text-red-500 text-sm">{formik.errors.postcode}</div>
              ) : null}

              <label className="text-sm mb-[8px]">Location *</label>
              <input
                className="border-field"
                type="text"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
              />
              {formik.touched.location && formik.errors.location ? (
                <div className="text-red-500 text-sm">{formik.errors.location}</div>
              ) : null}

              <label className="text-sm mb-[8px]">Your e-mail *</label>
              <input
                className="border-field"
                type="email"
                name="yourmail"
                value={formik.values.yourmail}
                onChange={formik.handleChange}
              />
              {formik.touched.yourmail && formik.errors.yourmail ? (
                <div className="text-red-500 text-sm">{formik.errors.yourmail}</div>
              ) : null}
            </div>
          </div>
          <button type="submit" className="btn-primary mt-[30px]">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default HomeNew;
