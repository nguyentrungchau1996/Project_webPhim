import * as yup from "yup";
import { restConnector } from ".";

export const userSignupSchema = yup.object().shape({
  taiKhoan: yup.string().required("Please enter username!"),
  matKhau: yup
    .string()
    .required("Please enter password!")
    .min(8, "Min 8 characters")
    .max(16),
  hoTen: yup
    .string()
    .required("Please enter fullname!")
    .matches(/^[a-zA-Z ]*$/),
  email: yup
    .string()
    .email()
    .required(),
  soDt: yup
    .string()
    .required("Please enter phone number!")
    .matches(/^[0-9]*$/)
});

export const userSigninSchema = yup.object().shape({
  taiKhoan: yup.string().required("Please enter username!"),
  matKhau: yup.string().required("Please enter password!")
});

class UserService {
  signup(user) {
    return restConnector({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user
    });
  }

  signin(user) {
    return restConnector({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user
    });
  }

  fetchListOfUsers() {
    return restConnector({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03"
    });
  }

  addUser(newUser) {
    return restConnector({
      method: "POST",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: newUser
    });
  }

  deleteUser(username) {
    return restConnector({
      method: "DELETE",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${username}`
    });
  }

  updateUser(updatedUser) {
    return restConnector({
      method: "PUT",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: updatedUser
    });
  }
}

export default new UserService();
