import { FormType, Counter } from "@/types/types";
import axios from "axios"

const _BASE_URL = "https://freshfoods.cehpoint.com";

export const sendPartnerJoinRequest = async ({
  form,
  counters
}: {
  form: FormType,
  counters: Counter[]
  }) => {
  const formBody = new FormData();
  formBody.append("name", form.name);
  formBody.append("description", form.description);
  formBody.append("phone", form.phone);
  formBody.append("address", form.address);
  formBody.append("email", form.email);
  formBody.append("license", form.license!.toString());
  formBody.append("labour_license", form.labour_license!.toString());
  formBody.append("fssai_license", form.labour_license!.toString());
  formBody.append("water_certificate", form.water_certificate!.toString());
  formBody.append("details", JSON.stringify(counters));

  await axios.post(`${_BASE_URL}/partner-req`, formBody, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data);
    alert('Request sent successfully!');
  }).catch(err => {
    alert(err);
  });
}