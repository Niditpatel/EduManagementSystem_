import api from "./api";

export async function Signup(data: any) {
  try {
    const res = await api.post<any>( "/signup", data);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function Login(data: any) {
  try {
    const res = await api.post<any>( "/login", data);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function ForgotPassword(data: any) {
  try {
    const res = await api.post<any>( "/forgotpassword", data);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function CheckForResetPassword(data: any) {
  try {
    const res = await api.post<any>( "/checkfortoken", data);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function ResetPassword(data: any) {
  try {
    const res = await api.post<any>( "/resetpassword", data);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function VerifyAccount(token: any) {
  try {
    const res = await api.get<any>( "/verify", {
      headers: {
        authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function ActivateAccount(token: any) {
  try {
    const res = await api.put<any>( "/active", { token: token });
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function RegenerateLink(data: any) {
  try {
    const res = await api.put<any>( "/regeneratetoken", data);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
}
