import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";
import logger from "./middleware/logger";
import toast from "./middleware/toast";

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      // logger({ destination: "console" }),
      toast,
      api,
    ],
  });
}
