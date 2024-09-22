import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

// components
import Button from "@/components/Button";

type activeAuthUIType = "secretKey" | "authentication";

interface SecretKeyUIProps {
  setActiveAuthUI: (ui: activeAuthUIType) => void;
}

const SecretKeyUI = ({ setActiveAuthUI }: SecretKeyUIProps) => {
  // local state
  const [secretKey, setSecretKey] = useState("");

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
      toast.success("Valid Secret Key");
      setTimeout(() => {
        toast.info("Proceed to login with your credentials");
        setActiveAuthUI("authentication");
      }, 500);
    } else {
      toast.error("Invalid secret key");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="mx-auto max-w-xl"
    >
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
            className="focus:outline-black; rounded-md border-2 border-gray-200 px-2 py-1 focus:border-transparent"
            value={secretKey}
            onChange={handleChange}
          />
        </label>
        <Button>Submit Key</Button>
      </form>
    </motion.div>
  );
};

export default SecretKeyUI;
