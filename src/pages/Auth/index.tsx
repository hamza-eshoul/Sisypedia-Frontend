import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// components
import Button from "@/components/Button";
import Image from "@/components/Image";

const AuthPage = () => {
  // local state
  const [secretKey, setSecretKey] = useState("");

  // library hooks
  const navigate = useNavigate();

  // event handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecretKey(e.target.value);
  };

  // functions
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const authSecretKey = import.meta.env.VITE_AUTH_SECRET_KEY;

    const trimmedSecretKey = secretKey.trim();

    if (trimmedSecretKey === authSecretKey) {
      navigate("/home");
    } else {
      toast.error("Invalid secret key");
    }
  };

  return (
    <main className="flex h-screen">
      <section className="flex w-2/5 flex-col items-center justify-center">
        <div className="mx-auto max-w-xl">
          <h1 className="pb-6 text-center text-3xl font-medium">Sisypedia</h1>
          <form
            className="flex flex-col items-center gap-5"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col items-center gap-3">
              Secret Key
              <input
                type="password"
                placeholder="Enter the secret key here ..."
                value={secretKey}
                onChange={handleChange}
              />
            </label>
            <Button>Submit Key</Button>
          </form>
        </div>
      </section>
      <section className="w-3/5">
        <Image
          alt="auth image"
          src={
            "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1727006447/Sisypedia/auth-image_gsl0si.png"
          }
        />
      </section>
    </main>
  );
};

export default AuthPage;
