import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { setdDeviceAction } from "./store/ducks/Utils/actions";
import { useAppDispatch } from "./store/hooks";

export function MyRoutes() {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) {
        dispatch(setdDeviceAction("mobile"));
      } else {
        dispatch(setdDeviceAction("desktop"));
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
