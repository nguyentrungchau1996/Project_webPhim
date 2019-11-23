import {
  FETCH_CREDENTIALS,
  FETCH_LIST_OF_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SAVE_EDIT_USER
} from "../Actions/ActionType";

let initialState = {
  credentials: null,
  listOfUsers: [],
  //editUser: Gửi lên user muốn updated
  editUser: {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "GP03",
    maLoaiNguoiDung: ""
  }
};

const UserReducer = (state = initialState, action) => {
  let index = 0;
  switch (action.type) {
    case FETCH_CREDENTIALS:
      state.credentials = action.payload;
      return { ...state };

    case FETCH_LIST_OF_USERS:
      state.listOfUsers = action.payload;
      return { ...state };

    case ADD_USER:
      //payload ở đây là newUser
      state.listOfUsers.push(action.payload);
      return { ...state };

    case DELETE_USER:
      index = state.listOfUsers.findIndex(e => e.taiKhoan === action.taiKhoan);
      if (index !== -1) {
        state.listOfUsers.splice(index, 1);
      }
      return { ...state };

    case UPDATE_USER:
      index = state.listOfUsers.findIndex(
        e => e.taiKhoan === action.payload.taiKhoan
      );
      if (index !== -1) {
        state.listOfUsers[index] = action.payload;
      }
      return { ...state };

    //Lưu thằng muốn update lên storeReducer
    case SAVE_EDIT_USER:
      state.editUser = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default UserReducer;
