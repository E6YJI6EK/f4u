import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore } from "./config/store";
import type { StateSchema } from "./config/StateSchema";
import { useAppDispatch } from "./config/store";

export { 
    StateSchema,
    StoreProvider, 
    createReduxStore,
    useAppDispatch
}