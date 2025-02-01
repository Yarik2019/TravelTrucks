import { Field, Formik, Form, ErrorMessage } from "formik";
import SubmitBtn from "../buttons/SubmitBtn/SubmitBtn";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { successfullyToast } from "../../utils/toast";
import { orderSchemaBook } from "../../utils/validations";
const BookForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const handleSubmit = (e, options) => {
    successfullyToast("Successfully booked");
    options.resetForm();
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
        validationSchema={orderSchemaBook}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col mb-6 gap-[14px]">
            <label>
              <Field
                name="name"
                type="text"
                placeholder="Name*"
                className="w-full p-[18px] bg-gray-100 text-text-color font-display rounded-xl outline-0 transition-transform transform hover:scale-105"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-sm"
              />
            </label>
            <label>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className="w-full p-[18px] bg-gray-100 text-text-color font-display rounded-xl outline-0 transition-transform transform hover:scale-105"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </label>
            <label className="">
              <Field name="date">
                {({ field, form }) => (
                  <DatePicker
                    {...field}
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => form.setFieldValue("date", date)}
                    placeholderText="Booking date*"
                    minDate={new Date()}
                    shouldCloseOnSelect={true}
                    className="w-full  transition-transform transform hover:scale-105"
                  />
                )}
              </Field>
              <ErrorMessage 
                name="date"
                component="p"
                className="text-red-500 text-sm"
              />
            </label>
            <label>
              <Field
                name="comment"
                as="textarea"
                placeholder="Comment"
                className="w-full p-[18px] h-[118px] bg-gray-100 text-text-color font-display rounded-xl outline-0 transition-transform transform hover:scale-105"
              />
            </label>
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
