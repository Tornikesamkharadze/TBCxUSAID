import MainPage from "./Pages/MainPage";
import TbcIt from "./Pages/TbcIt";
import TbcxUsaid from "./Pages/TbcxUsaid";
import Risks from "./Pages/Risks";

const routes = [
  {
    name: "მთავარი",
    route: "#",
    path: "#",
    element: <MainPage />,
    routId: 1,
  },
  {
    name: "TBC IT",
    route: "#",
    path: "#",
    element: <TbcIt />,
    routId: 2,
  },
  {
    name: "TBC x USAID",
    route: "/",
    index: "/",
    element: <TbcxUsaid />,
    routId: 3,
  },
  {
    name: "რისკები",
    route: "#",
    path: "#",
    element: <Risks />,
    routId: 4,
  },
];

export default routes;
