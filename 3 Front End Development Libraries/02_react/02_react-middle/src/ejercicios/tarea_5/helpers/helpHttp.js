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
    if (!opt.body) delete opt.body;

    setTimeout(() => controller.abort(), 3000); // aborta peticiones al API s estas se demoran

    return fetch(end, opt)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "ocurrio un error",
            })
      )
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

  return { get, post, put, del };
};
