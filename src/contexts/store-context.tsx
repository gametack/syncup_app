import * as React from "react";
import { createPlayerStore } from "../stores";

export const storeContext = React.createContext({
  playerStore: createPlayerStore(),
});
