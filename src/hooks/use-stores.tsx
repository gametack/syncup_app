import * as React from "react";
import { storeContext } from "../contexts/store-context";

export const useStores = () => React.useContext(storeContext);
