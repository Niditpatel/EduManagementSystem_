import api from "./api";

export async function GetTitles() {
  const res = await api.get("/title");
  return res.data;
}

export async function GetInstitutes(data: String) {
  const res = await api.get("/searchinstitute", {
    params: { key: data },
  });
  return res.data;
}