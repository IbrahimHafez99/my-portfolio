import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ibrahim.hafez99@hotmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen">
      <h3 className="text-center top-24 tracking-[20px] text-gray-500 text-2xl pt-[90px] mb-10">
        Contact
      </h3>
      <div className="flex flex-col items-center relative text-center max-w-7xl px-10 mx-auto">
        <div className="flex flex-col space-y-10 mt-10">
          <h4 className="text-2xl md:text-4xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A]/50 underline">
              Lets Talk.
            </span>
          </h4>

          <div className="space-y-10">
            <div className="flex items-center justify-center space-x-5">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">+96892806306</p>
            </div>
            <div className="flex items-center justify-center space-x-5 ">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse flex-shrink-0" />
              <p className="text-xl md:text-2xl">ibrahim.hafez99@hotmail.com</p>
            </div>
            <div className="flex items-center justify-center space-x-5">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">Muscat, Oman</p>
            </div>
          </div>
          {/* form  */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="md:flex md:flex-row md:space-x-2 space-y-2 md:space-y-0">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput w-full"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput w-full"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
