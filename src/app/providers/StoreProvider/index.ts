import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore } from "./config/store";
import { StateSchema } from "./config/StateSchema";

export type {StateSchema}

export { 
    StoreProvider, 
    createReduxStore
}