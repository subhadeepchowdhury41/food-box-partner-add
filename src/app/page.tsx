'use client';

import Button from "@/components/Button";
import { useFormContext } from "../providers/form_provider";
import RestaurantBuilder from "./sections/restaurant_builder";
import RestaurantForm from "./sections/restaurant_form";

export default function Home() {
  const { form, stage, setStage, sendJoiningRequest } = useFormContext();
  return (
    <>
    <div style={{
      width: '100%',
      display: 'inline',
      backgroundColor: '#eaeaea',
      justifyContent: 'center'
    }}>
      <div>
        {
        stage === "form" ?
          <RestaurantForm />
          : <RestaurantBuilder />
        }
      </div>
      </div>
      <div style={{
        display: 'inline',
        justifyContent: 'end',
        padding: '2em 1em',
      }}>
        {stage === "builder" ? <Button onClick={e => {
            setStage("form");
          }}
          label="Prev"/> : null}
        {stage === "form" ? <Button label="Next" onClick={() => {
          if (form.labour_license && form.fssai_license && form.water_certificate && form.license) {
            setStage("builder");
            return;
          }
          alert('Please uplaod all the files');
        }} /> : <Button label="Submit" onClick={async () => {
            await sendJoiningRequest();
          }}/>}
        </div>
    </>
  )
}