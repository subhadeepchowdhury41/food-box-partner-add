import { FormType, Counter } from "@/types/types";

const _BASE_URL = "https://freshfoods.cehpoint.co.in";

export const sendPartnerJoinRequest = async ({
  form,
  counters
}: {
  form: FormType,
  counters: Counter[]
  }) => {
  console.log(counters);
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

  await fetch(`${_BASE_URL}/partner-req`, {
    body: formBody,
    method: 'POST',
    mode: 'no-cors',
    headers: {
      "Content-Type": "multipart/form"
    }}
  ).then(async res => {
    console.log('Status: ', res.status);
    console.log('Body', await res.json());
    // alert('Request sent successfully!');
  }).catch(err => {
    // alert(err);
  });
}