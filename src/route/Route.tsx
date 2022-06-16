import { useRoutes} from "react-router-dom";
import { Wallet } from "../page/Wallet/Wallet";
import { Welcome } from "../page/Welcome/Welcome";

export default function Router() {
  let element = useRoutes([
    {
      children: [
        { path: "/", element: <Welcome /> },
        { path: "/wallet", element: <Wallet /> },
      ],
    },
  ]);
  return element;
}
