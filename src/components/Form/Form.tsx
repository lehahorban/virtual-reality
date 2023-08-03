import { FC, useState } from "react";
import data from "@/data/data.json";

import { FormData } from "./FormType";

const Form: FC = () => {
  const initialState: FormData = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    text: "",
  };

  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChange = (fieldName: keyof FormData, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.name.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.subject.trim() === "" ||
      formData.text.trim() === ""
    ) {
      alert("Будь ласка, заповніть всі поля");
      return;
    }

    console.log(formData);
    clearField();
  };

  const clearField = () => {
    setFormData(initialState);
  };

  return (
    <form
      onSubmit={formSubmit}
      className="grid gap-y-5 xl:gap-x-3 xl:grid-cols-2 "
    >
      <input
        onChange={(e) => handleChange("name", e.target.value)}
        value={formData.name}
        className="input"
        type="text"
        placeholder={data.join.form.name}
      />
      <input
        onChange={(e) => handleChange("lastName", e.target.value)}
        value={formData.lastName}
        className="input"
        type="text"
        placeholder={data.join.form.lastName}
      />
      <input
        onChange={(e) => handleChange("email", e.target.value)}
        value={formData.email}
        className="input"
        type="email"
        placeholder={data.join.form.email}
      />
      <input
        onChange={(e) => handleChange("phone", e.target.value)}
        value={formData.phone}
        className="input"
        type="tel"
        placeholder={data.join.form.phone}
      />
      <input
        onChange={(e) => handleChange("subject", e.target.value)}
        value={formData.subject}
        className="input xl:col-span-2"
        type="text"
        placeholder={data.join.form.subject}
      />
      <textarea
        onChange={(e) => handleChange("text", e.target.value)}
        value={formData.text}
        className="input xl:col-span-2 resize-none min-h-[215px]"
        placeholder={data.join.form.textarea}
      />
      <div className="flex justify-center xl:col-span-2 mt-3">
        <button className="bg-gradient-left-to-right py-4 text-main font-bold text-center text-[12px] rounded-full w-[154px]">
          {data.join.form.btn}
        </button>
      </div>
    </form>
  );
};

export default Form;
