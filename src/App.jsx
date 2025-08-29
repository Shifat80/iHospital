import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen w-full relative">
        {/* Medora Aurora Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
        radial-gradient(ellipse 80% 60% at 5% 40%, rgba(26, 231, 200, 0.781), transparent 70%),
        radial-gradient(ellipse 70% 60% at 45% 45%, rgba(0, 255, 180, 0.25), transparent 70%),
        radial-gradient(ellipse 62% 52% at 83% 76%, rgba(100, 255, 201, 0.652), transparent 65%),
        radial-gradient(ellipse 60% 48% at 75% 20%, rgba(22, 125, 199, 0.333), transparent 70%),
        linear-gradient(45deg, #4da5a6eb 0%, #388d90c5 100%)
      `,
          }}
        />
        {/* Your content goes here */}
        <div className="relative z-10">
          {/* Example content */}
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
