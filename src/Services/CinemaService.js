import { restConnector } from "./index";

class CinemaService {
  fetchShow() {
    return restConnector({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET"
    });
  }

  fetchDetailedShow(filmId) {
    return restConnector({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${filmId}`,
      method: "GET"
    });
  }

  fetchSeating(showId) {
    return restConnector({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${showId}`,
      method: "GET"
    });
  }
}

export default new CinemaService();
