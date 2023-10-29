/* eslint-disable no-useless-escape */
import Vue from "vue";
import slugify from "slugify";

const appUtils = {
  gg: function () {
    return 3;
  },
  numberFormat(number, currencyUnit) {
    let data = number
      ?.toString()
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (currencyUnit) {
      data += ` ${currencyUnit}`;
    }
    return data;
  },

  padStart(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  },
  setLocalToken(token) {
    return localStorage.setItem("jwt_token", token);
  },
  getLocalToken() {
    return localStorage.getItem("jwt_token");
  },
  removeLocalToken() {
    localStorage.removeItem("jwt_token");
  },
  getLocalUser: () =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  removeLocalUser() {
    Vue.prototype.$user = null;
    localStorage.removeItem("user");
  },
  setLocalUser: (user) => {
    Vue.prototype.$user = user;
    localStorage.setItem("user", JSON.stringify(user));
  },
  randomStr(length, isNumber) {
    var result = "";
    var characters = isNumber
      ? "0123456789"
      : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  onResizeImage(canvas, photo, width = 300) {
    let ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = width * (photo.height / photo.width);
    ctx.drawImage(photo, 0, 0, canvas.width, canvas.height);
    const base64Image = canvas.toDataURL();
    if (base64Image) {
      let resizePhoto = new Image();
      resizePhoto.src = base64Image;

      return resizePhoto;
    }

    return false;
  },
  getImageURL(path) {
    return import.meta.env.VITE_APP_BASE_IMAGE_URL + "storage/" + path;
  },
  getDocumentURL(path) {
    return import.meta.env.VITE_APP_BASE_IMAGE_URL + "storage/" + path;
  },
  setLocalLang(lang) {
    return localStorage.setItem("lang", lang || "vi");
  },
  getLocalLang() {
    return localStorage.getItem("lang");
  },
  removeLocalLang() {
    return localStorage.setItem("lang", "vi");
  },
  removeVietnameseTones(str) {
    if (!str) return "";
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    // str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ')
    return str;
  },
  getFilename(fullPath) {
    if (!_.isString(fullPath)) return;
    return fullPath.split("/").pop();
  },
  base64: {
    decode: (s) => window.btoa(unescape(encodeURIComponent(s))),
    encode: (b) => decodeURIComponent(escape(window.atob(b))),
  },
  formatInputDate(dateTime) {
    if (!dateTime) return Vue.prototype.moment().format("YYYY-MM-DD");
    return Vue.prototype.moment(dateTime).format("YYYY-MM-DD");
  },
  formatInputDateTime(dateTime) {
    if (!dateTime) return Vue.prototype.moment().format("YYYY-MM-DD HH:mm:ss");
    return Vue.prototype.moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
  },
  formatInputDateTimeUTC(dateTime) {
    if (!dateTime) {
      return Vue.prototype.moment().utc().format("YYYY-MM-DD HH:mm:ss");
    }
    return Vue.prototype.moment(dateTime).utc().format("YYYY-MM-DD HH:mm:ss");
  },
  formatDateTimeUTCTz(dateTime) {
    if (!dateTime) {
      return Vue.prototype.moment().utc().format("YYYY-MM-DDTHH:mm:ssZ");
    }
    return Vue.prototype.moment(dateTime).utc().format("YYYY-MM-DDTHH:mm:ssZ");
  },
  formatDateTime(dateTime) {
    if (!dateTime) return Vue.prototype.moment().format("HH:mm DD/MM/YYYY");
    return Vue.prototype.moment(dateTime).format("HH:mm DD/MM/YYYY");
  },
  formatDateTimeFull(dateTime) {
    if (!dateTime) {
      return Vue.prototype.moment().format("HH:mm:ss DD/MM/YYYY");
    }
    return Vue.prototype.moment(dateTime).format("HH:mm:ss DD/MM/YYYY");
  },
  formatTime(dateTime) {
    if (!dateTime) {
      return Vue.prototype.moment().format("HH:mm").replace(":", "h");
    }
    return Vue.prototype.moment(dateTime).format("HH:mm").replace(":", "h");
  },
  formatSimpleTime(dateTime) {
    if (!dateTime) {
      return Vue.prototype.moment().format("HH:mm");
    }
    return Vue.prototype.moment(dateTime).format("HH:mm");
  },
  formatDate(dateTime) {
    if (!dateTime) return Vue.prototype.moment().format("DD/MM/YYYY");
    return Vue.prototype.moment(dateTime).format("DD/MM/YYYY");
  },
  formatSimpleDate(dateTime) {
    if (!dateTime) return Vue.prototype.moment().format("D/M");
    return Vue.prototype.moment(dateTime).format("D/M");
  },
  formatDuration(s, e) {
    let start = Vue.prototype.moment(s);
    let end = Vue.prototype.moment(e);
    var duration = Vue.prototype.moment.duration(end.diff(start));
    return duration.asMinutes();
  },
  convertSlug(text, replacement = "-") {
    if (!text || typeof text === "undefined") return;
    return slugify(text, {
      replacement, // replace spaces with replacement character, defaults to `-`
      remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: true, // strip special characters except replacement, defaults to `false`
      locale: "vi", // language code of the locale to use
    });
  },
  groupBy(collection, property) {
    var i = 0,
      val,
      index,
      values = [],
      result = [];
    for (; i < collection.length; i++) {
      val = collection[i][property];
      index = values.indexOf(val);
      if (index > -1) {
        result[index].push(collection[i]);
      } else {
        values.push(val);
        result.push([collection[i]]);
      }
    }
    return result;
  },
  groupByKey(list, key, { omitKey = false }) {
    return list.reduce(
      (hash, { [key]: value, ...rest }) => ({
        ...hash,
        [value]: (hash[value] || []).concat(
          omitKey ? { ...rest } : { [key]: value, ...rest }
        ),
      }),
      {}
    );
  },
  isImage(file) {
    if (!file) return false;
    if (file?.url && /(getimagefile)/.test(file?.url)) {
      return true;
    }

    if (file instanceof File) {
      return !!file.type.match("image.*");
    }

    const extensions = ["jpg", "jpeg", "png", "tiff", "bmp", "svg"];
    const extVal =
      file?.split(".").pop().toLowerCase() ||
      file?.file_name?.split(".").pop().toLowerCase();

    return extensions.includes(extVal);
  },
  isPdf(file) {
    if (!file) return false;
    if (file instanceof File) {
      return !!file.type.match("application/pdf");
    }
    const extVal = file?.split(".").pop().toLowerCase();
    return extVal === "pdf";
  },
  getExtensionOfFile(filename) {
    if (!filename) return;
    return filename?.split(".").pop().toLowerCase();
  },
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(letters);
    return color;
  },
  isJSON(data) {
    try {
      JSON.parse(data);
    } catch (error) {
      return false;
    }
    return true;
  },
  isToday(value) {
    const today = new Date();
    const date = new Date(value);
    if (today?.toDateString() === date?.toDateString()) {
      return true;
    }
    return false;
  },
  onClearUser() {
    this.removeLocalToken();
    this.removeLocalUser();
  },
  isMobileOrTablet() {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  },
};

export default appUtils;
