import api from "./api";


const Headers = (token: any) => {
  return {
    authorization: token,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

const Create = async (endpoints: string, data: any, params: any) => {
  const token = sessionStorage.getItem("Access");
  try {
    const res = await api.post<any>('/'+ endpoints, data, {
      headers: Headers(token),
      params: params,
    });
    console.log(token, "token");
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

const Update = async (
  endpoints: string,
  data: any,
  token: any,
  params: any
) => {
  try {
    const res = await api.put<any>('/' + endpoints, data, {
      headers: Headers(token),
      params: params,
    });
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

const Delete = async (endpoints: any, token: any, id: any) => {
  try {
    const res = await api.delete<any>('/' + endpoints + id, {
      headers: Headers(token),
    });
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

const Get = async (endpoints: string, token: any, params: any) => {
  try {
    const res = await api.get<any>('/' + endpoints, {
      headers: Headers(token),
      params: params,
    });
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export { Create, Update, Delete, Get };
