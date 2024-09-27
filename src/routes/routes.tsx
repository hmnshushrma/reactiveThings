import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const UseStateComponent = lazy(
  () => import("../components/local/contentComponents/UseState.component")
);
const UseEffectComponent = lazy(
  () => import("../components/local/contentComponents/UseEffect.component")
);
const UseContextComponent = lazy(
  () => import("../components/local/contentComponents/UseContext.component")
);
const NotFoundComponent = lazy(
  () => import("../components/local/errorPages/NotFound")
);

type AppRouteObject = RouteObject & {
  protected?: boolean;
};

export const routes: AppRouteObject[] = [
  {
    path: "useState",
    element: <UseStateComponent />,
    protected: false,
    index: true,
  },
  { path: "useEffect", element: <UseEffectComponent />, protected: false },
  { path: "useContext", element: <UseContextComponent />, protected: false },
  { path: "*", element: <NotFoundComponent />, protected: false },
];
