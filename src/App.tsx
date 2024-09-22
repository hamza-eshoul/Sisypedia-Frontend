import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// services
import router from "@services/Router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 2 * 60 * 60 * 1000, // 2 hours
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer autoClose={5000} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
