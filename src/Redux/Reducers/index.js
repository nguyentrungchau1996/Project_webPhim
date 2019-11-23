import {combineReducers} from "redux";
import ShowReducer from "./Show";
import SeatingReducer from "./Seating";
import UserReducer from "./User";
import StatusReducer from "./Status";

const RootReducer = combineReducers({
    cinema: ShowReducer,
    seating: SeatingReducer,
    user: UserReducer, 
    status: StatusReducer
});

export default RootReducer;
