import { useState } from "react";

import Image from "@/components/Image";
import SecretKeyUI from "./components/SecretKeyUI";
import AuthenticationUI from "./components/AuthenticationUI";
import { AnimatePresence } from "framer-motion";

type activeAuthUIType = "secretKey" | "authentication";

const AuthPage = () => {
  const [activeAuthUI, setActiveAuthUI] =
    useState<activeAuthUIType>("secretKey");

  return (
    <main className="flex h-screen">
      <section className="flex w-2/5 flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {activeAuthUI === "secretKey" && (
            <SecretKeyUI key="secretKeyUI" setActiveAuthUI={setActiveAuthUI} />
          )}

          {activeAuthUI === "authentication" && (
            <AuthenticationUI key="authenticationUI" />
          )}
        </AnimatePresence>
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
