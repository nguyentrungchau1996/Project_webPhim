import { CHANGE_EDIT_STATUS } from "../Actions/ActionType";

let initialState = {
  //Nếu là true <-> trạng thái Cập nhật
  //Nếu là false <-> Thêm người dùng
  editStatus: false,
};

const StatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EDIT_STATUS:
      state.editStatus = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default StatusReducer;
