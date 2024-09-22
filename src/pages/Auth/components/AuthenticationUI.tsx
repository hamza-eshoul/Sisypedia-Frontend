import { motion } from "framer-motion";

const AuthenticationUI = () => {
  return (
    <motion.div
      className="mx-auto max-w-xl"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
    >
      <h1 className="pb-6 text-center text-3xl font-medium">Authentication</h1>

      <p>Login with your credentials</p>
    </motion.div>
  );
};

export default AuthenticationUI;
