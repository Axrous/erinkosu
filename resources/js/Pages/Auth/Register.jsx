import React, { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import CustomersLayout from "@/Layouts/CustomersLayout";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset(["password", "password_confirmation"]);
    };
  }, []);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("postRegister"));
  };

  return (
    <CustomersLayout>
      <Head title="Register" />

      <div className="mx-auto w-3/12 border p-10 mt-52 rounded-xl shadow-2xl bg-[#ede0d4]">
        <h1 className="text-2xl text-center mb-10">Daftar Dulu Ya!</h1>
        <div>
          <InputError message={errors.wrong} className="mb-2" />
        </div>
        <form onSubmit={submit}>
          <div>
            <InputLabel forInput="email" value="Email" />
            <TextInput
              type="text"
              name="email"
              value={data.email}
              className="mt-1 block w-full"
              autoComplete="username"
              isFocused={true}
              handleChange={onHandleChange}
            />

            <InputError message={errors.email} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel forInput="password" value="Password" />
            <TextInput
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full"
              autoComplete="current-password"
              handleChange={onHandleChange}
            />

            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel forInput="password" value="Confirm Password" />
            <TextInput
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              className="mt-1 block w-full"
              autoComplete="current-password"
              handleChange={onHandleChange}
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <Link href="/login" className="hover:underline">
              Already Have Account?
            </Link>
            <PrimaryButton className="ml-4" processing={processing}>
              Register
            </PrimaryButton>
          </div>
        </form>
      </div>
    </CustomersLayout>
  );
}
