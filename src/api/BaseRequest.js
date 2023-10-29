// import Vue from "vue";
import appUtils from "@/utils/appUtils";
import i18n from "@/lang";
import router from "@/routers";

export default class BaseRequest {
  getUrlPrefix(url) {
    const endpoint = url.startsWith("http")
      ? url
      : `${import.meta.env.VITE_APP_BASE_API}api/${url}`;

    return endpoint;
  }

  getUrlPrefixLocal(url) {
    const endpoint = url.startsWith("http")
      ? url
      : import.meta.env.VITE_APP_BASE_API_GO
      ? `${import.meta.env.VITE_APP_BASE_API_GO}api/${url}`
      : `${import.meta.env.VITE_APP_BASE_API}api/${url}`;

    return endpoint;
  }

  post(url, data = {}, headers = null, showMessage) {
    return new Promise((resolve, reject) => {
      const options = {};
      if (headers) {
        options.headers = headers;
      }

      // Show loading.
      // Vue.prototype.$Progress.start()

      window.axios
        .post(this.getUrlPrefix(url), data, options, showMessage)
        .then((response) => {
          // Hide loading.
          // Vue.prototype.$Progress.finish()

          if (response.data.message && showMessage) {
            window.$toast.success({
              message: response.data.message,
            });
          }
          if (response.data.code === 200) {
            resolve(response.data);
            return;
          }
          if (response.status === 200) {
            resolve(response);
            return;
          }
          if (response.status === 406) {
            // window.location.href = "/login";
          }
        })
        .catch((error) => {
          this._errorHandler(reject, error, showMessage);
        });
    });
  }

  postLocal(url, data = {}, headers = null, showMessage) {
    return new Promise((resolve, reject) => {
      const options = {};
      if (headers) {
        options.headers = headers;
      }

      // Show loading.
      // Vue.prototype.$Progress.start()

      window.axios
        .post(this.getUrlPrefixLocal(url), data, options, showMessage)
        .then((response) => {
          // Hide loading.
          // Vue.prototype.$Progress.finish()

          if (response.data.message && showMessage) {
            window.$toast.success({
              message: response.data.message,
            });
          }
          if (response.data.code === 200) {
            resolve(response.data);
            return;
          }
          if (response.status === 200) {
            resolve(response);
            return;
          }
          if (response.status === 406) {
            // window.location.href = "/login";
          }
        })
        .catch((error) => {
          this._errorHandler(reject, error, showMessage);
        });
    });
  }

  delete(url, data = {}, headers = null, showMessage) {
    return new Promise((resolve, reject) => {
      const options = {};
      if (headers) {
        options.headers = headers;
      }

      // Show loading.
      // Vue.prototype.$Progress.start()

      window.axios
        .delete(this.getUrlPrefix(url), data, options, showMessage)
        .then((response) => {
          // Hide loading.
          // Vue.prototype.$Progress.finish()

          if (response.data.message && showMessage) {
            window.$toast.success({
              message: response.data.message,
            });
          }
          if (response.data.code === 200) {
            resolve(response.data);
            return;
          }
          if (response.status === 200) {
            resolve(response);
            return;
          }
          if (response.status === 406) {
            // window.location.href = "/login";
          }
        })
        .catch((error) => {
          this._errorHandler(reject, error, showMessage);
        });
    });
  }

  deleteLocal(url, data = {}, headers = null, showMessage) {
    return new Promise((resolve, reject) => {
      const options = {};
      if (headers) {
        options.headers = headers;
      }

      // Show loading.
      // Vue.prototype.$Progress.start()

      window.axios
        .delete(this.getUrlPrefixLocal(url), data, options, showMessage)
        .then((response) => {
          // Hide loading.
          // Vue.prototype.$Progress.finish()

          if (response.data.message && showMessage) {
            window.$toast.success({
              message: response.data.message,
            });
          }
          if (response.data.code === 200) {
            resolve(response.data);
            return;
          }
          if (response.status === 200) {
            resolve(response);
            return;
          }
          if (response.status === 406) {
            // window.location.href = "/login";
          }
        })
        .catch((error) => {
          this._errorHandler(reject, error, showMessage);
        });
    });
  }

  put(url, data = {}, headers = null, showMessage) {
    return new Promise((resolve, reject) => {
      const options = {};
      if (headers) {
        options.headers = headers;
      }

      // Show loading.
      // Vue.prototype.$Progress.start()

      window.axios
        .put(this.getUrlPrefix(url), data, options, showMessage)
        .then((response) => {
          // Hide loading.
          // Vue.prototype.$Progress.finish()

          if (response.data.message && showMessage) {
            window.$toast.success({
              message: response.data.message,
            });
          }
          if (response.data.code === 200) {
            resolve(response.data);
            return;
          }
          if (response.status === 200) {
            resolve(response);
            return;
          }
          if (response.status === 406) {
            // window.location.href = "/login";
          }
        })
        .catch((error) => {
          this._errorHandler(reject, error, showMessage);
        });
    });
  }

  putLocal(url, data = {}, headers = null, showMessage) {
    return new Promise((resolve, reject) => {
      const options = {};
      if (headers) {
        options.headers = headers;
      }

      // Show loading.
      // Vue.prototype.$Progress.start()

      window.axios
        .put(this.getUrlPrefixLocal(url), data, options, showMessage)
        .then((response) => {
          // Hide loading.
          // Vue.prototype.$Progress.finish()

          if (response.data.message && showMessage) {
            window.$toast.success({
              message: response.data.message,
            });
          }
          if (response.data.code === 200) {
            resolve(response.data);
            return;
          }
          if (response.status === 200) {
            resolve(response);
            return;
          }
          if (response.status === 406) {
            // window.location.href = "/login";
          }
        })
        .catch((error) => {
          this._errorHandler(reject, error, showMessage);
        });
    });
  }

  get(url, params, showMessage) {
    return new Promise((resolve, reject) => {
      // Show loading.
      // Vue.prototype.$Progress.start()

      window.axios
        .get(this.getUrlPrefix(url), { params })
        .then((response) => {
          // Hide loading.
          // Vue.prototype.$Progress.finish()

          if (response.data.code === 200) {
            resolve(response.data);
            return;
          }
          if (response.status === 200) {
            resolve(response);
          }

          // if(response.data.status === 406){
          //     window.location.href = "/login";
          //     return;
          // }
        })
        .catch((error) => {
          this._errorHandler(reject, error, showMessage);
        });
    });
  }

  getLocal(url, params, showMessage) {
    return new Promise((resolve, reject) => {
      // Show loading.
      // Vue.prototype.$Progress.start()

      window.axios
        .get(this.getUrlPrefixLocal(url), { params })
        .then((response) => {
          // Hide loading.
          // Vue.prototype.$Progress.finish()

          if (response.data.code === 200) {
            resolve(response.data);
            return;
          }
          if (response.status === 200) {
            resolve(response);
          }

          // if(response.data.status === 406){
          //     window.location.href = "/login";
          //     return;
          // }
        })
        .catch((error) => {
          this._errorHandler(reject, error, showMessage);
        });
    });
  }

  postByUrl(url, data = {}, headers = null, showMessage) {
    return new Promise((resolve, reject) => {
      const options = {};
      if (headers) {
        options.headers = headers;
      }

      // Show loading.
      // Vue.prototype.$Progress.start()

      window.axios
        .post(url, data, options, showMessage)
        .then((response) => {
          // Hide loading.
          // Vue.prototype.$Progress.finish()

          if (response.data.message && showMessage) {
            window.$toast.success({
              message: response.data.message,
            });
          }
          if (response.data.code === 200) {
            resolve(response.data);
            return;
          }
          if (response.status === 200) {
            resolve(response);
            return;
          }
          if (response.status === 406) {
            // window.location.href = "/login";
          }
        })
        .catch((error) => {
          this._errorHandler(reject, error, showMessage);
        });
    });
  }

  _errorHandler(reject, err, showMessage = true) {
    // Hide loading.
    // Vue.prototype.$Progress.finish()

    if (err.response) {
      if (err.response.data.status === 414) {
        const firstKey = Object.keys(err.response.data.message)[0];
        if (firstKey) {
          alert(err.response.data.message[firstKey][0]);
        }
      }
      if (err.response.status === 422) {
        const messages = Object.values(err.response.data.errors).map(
          (errs) => "<span>" + i18n.t(`message_errors.${errs[0]}`) + "</span>"
        );
        if (showMessage) {
          window.$toast.error({
            message: messages.join("<br />"),
          });
        }
      } else if (err.response.data.message && err.response.status !== 401) {
        if (showMessage) {
          window.$toast.error({
            message: i18n.t(`message_errors.${err.response.data.message}`),
          });
        }
      }
      if (err.response.status === 401 || err.response.status === 406) {
        appUtils.onClearUser();
        router.push({ path: "/login" }).catch((_) => {});
      }
    }

    reject(err);
  }
}
