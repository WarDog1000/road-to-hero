export const helpHttp = () => {
  const customFetch = (end, opt) => {
    const defaultHeader = {
      accept: "application/json",
    };

    // Para cuando la peticion detecte que no hay una respuesta del server
    const controller = new AbortController();
    opt.signal = controller.signal;
    opt.method = opt.method || "GET";
    opt.headers = opt.headers
      ? { ...defaultHeader, ...opt.headers }
      : defaultHeader;
    opt.body = JSON.stringify(opt.body) || false;
    if (!opt.body) delete Option.body;

    setTimeout(() => controller.abort(), 100);

    let fetchError = {
      err: true,
      status: res.status || "00",
      statusText: res.statusText || "ocurrio un error",
    };

    return fetch(end, opt)
      .then((res) => (res.ok ? res.json() : Promise.reject(fetchError)))
      .catch((err) => err);
  };

  const get = (url, opt = {}) => customFetch(url, opt);
  const post = (url, opt = {}) => {
    opt.method = "POST";
    return customFetch(url, opt);
  };
  const put = (url, opt = {}) => {
    opt.method = "PUT";
    return customFetch(url, opt);
  };
  const del = (url, opt = {}) => {
    opt.method = "DELETE";
    return customFetch(url, opt);
  };

  return {get, post, put, del};
};
