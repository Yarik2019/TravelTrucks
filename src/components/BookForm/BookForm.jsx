import { Field, Formik, Form, ErrorMessage } from "formik";
import SubmitBtn from "../buttons/SubmitBtn/SubmitBtn";
// import SubmitBtn from "../buttons/SubmitBtn/SubmitBtn";
// import * as Yup from "yup";
const BookForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  // const validationSchema = Yup.object({
  //   name: Yup.string().required("Name is required"),
  //   email: Yup.string().email("Invalid email").required("Email is required"),
  //   bookingDate: Yup.date().required("Booking date is required"),
  // });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted", values);
    resetForm();
  };
  return (
    <div className="w-full h-auto border-[1px] border-[#dadde1] py-5 px-3 lg:py-8 2xl:py-11 lg:px-8 2xl:px-[57px] rounded-[10px]">
      <h2 className="text-xl font-semibold leading-tight text-text-color mb-1">
        Book your campervan now
      </h2>
      <p className="text-base font-semibold text-gray leading-normal mb-6">
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-4">
            <div className="mb-[14px]">
              <Field
                name="name"
                type="text"
                placeholder="Name*"
                className="w-full p-[18px] bg-gray-100 text-text-color font-display rounded-xl outline-0 transition-transform transform hover:scale-105"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-[14px]">
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className="w-full p-[18px] bg-gray-100 text-text-color font-display rounded-xl outline-0 transition-transform transform hover:scale-105"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-[14px]">
              <Field
                name="bookingDate"
                type="date"
                className="w-full p-[18px] bg-gray-100 text-text-color font-display rounded-xl outline-0 transition-transform transform hover:scale-105"
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-6">
              <Field
                name="comment"
                as="textarea"
                placeholder="Comment"
                className="w-full p-[18px] h-[118px] bg-gray-100 text-text-color font-display rounded-xl outline-0 transition-transform transform hover:scale-105"
              />
            </div>
            <div className="text-center">
              <SubmitBtn value="Send" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
