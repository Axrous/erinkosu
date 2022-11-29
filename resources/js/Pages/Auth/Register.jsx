import React, { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import CustomersLayout from "@/Layouts/CustomersLayout";

export default function Register({ auth }) {
  // console.log(auth);
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    password_confirmation: "",
    photo_profile: undefined,
    first_name: "",
    last_name: "",
    phone_number: "",
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

      <div className="mx-auto container lg:w-8/12 justify-between border p-10 mt-20 md:mt-32 rounded-xl shadow-2xl bg-[#ede0d4] mb-20">
        <h1 className="text-2xl text-center mb-10">Daftar Dulu Ya!</h1>
        <div>
          <InputError message={errors.wrong} className="mb-2" />
        </div>

        <form
          onSubmit={submit}
          className="flex justify-evenly flex-col md:flex-row pb-8"
        >
          <div className="md:w-4/12">
            <div className="mt-4">
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
              <InputLabel forInput="first_name" value="First Name" />
              <TextInput
                type="text"
                name="first_name"
                value={data.first_name}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                handleChange={onHandleChange}
              />
              <InputError message={errors.first_name} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel forInput="last_name" value="Last Name" />
              <TextInput
                type="text"
                name="last_name"
                value={data.last_name}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                handleChange={onHandleChange}
              />
              <InputError message={errors.last_name} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel forInput="phone_number" value="Phone Number" />
              <TextInput
                type="text"
                name="phone_number"
                value={data.phone_number}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                handleChange={onHandleChange}
              />
              <InputError message={errors.phone_number} className="mt-2" />
            </div>
          </div>

          <div className="md:w-4/12">
            <div className="mt-4">
              <InputLabel forInput="first_name" value="Photo Profile" />
              <input
                type="file"
                name="photo_profile"
                className="block w-full text-sm text-gray-900 bg-white rounded-lg border p-2 border-gray-300 cursor-pointer mt-1"
                onChange={(e) => setData("photo_profile", e.target.files[0])}
              />
              <InputError message={errors.photo_profile} className="mt-2" />
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

            <div className="flex items-center justify-between mt-10">
              <Link href="/login" className="hover:underline">
                Already Have Account?
              </Link>
              <PrimaryButton className="ml-4" processing={processing}>
                Register
              </PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </CustomersLayout>
  );
}
