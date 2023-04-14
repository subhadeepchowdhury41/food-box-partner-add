"use client";

import FileInput from '@/components/FileInput';
import DataCard from '@/components/DataCard';
import { useEffect, useState } from 'react';
import RestaurantBuilder from './restaurant_builder';
import Button from '@/components/Button';

type stage = "form" | "builder";

const RestaurantForm = () => {
  const [stage, setStage] = useState<stage>("form");
  const [form, setForm] = useState({
        name: "",
        phone: "",
        description: "",
        email: "",
        license: "",
        address: ""
  });
    useEffect(() => {
      console.log(form);
    }, [
      form
    ]);
  return (<div style={{
        backgroundColor: 'white',
        minWidth: '600px',
        alignSelf: 'center',
        padding: '1em'
      }}>
      <div style={{
          color: '#0e0e0e',
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: '3em',
        }}>
          Send Request
        </div>
        <div style={{
          color: '#0e0e0e',
          fontWeight: 'lighter',
          fontSize: '2em'
        }}>
          To become a Partner
        </div>
        { stage === "form" ? <div style={{
          margin: '1em 0'
        }}>
          <DataCard label='Name' value={form.name} onChange={(event) => {
            setForm(prev => ({...prev, name: event.target.value}));
          }}/>
          <DataCard label='Address' value={form.address} onChange={(event) => {
            setForm(prev => ({...prev, address: event.target.value}));
          }}/>
          <DataCard label='Description' multiline={true} value={form.description} onChange={(event) => {
            setForm(prev => ({...prev, description: event.target.value}));
          }}/>
          <DataCard label='Phone' value={form.phone} onChange={(event) => {
            setForm(prev => ({...prev, phone: event.target.value}));
          }}/>
          <DataCard label='Email' value={form.email} onChange={(event) => {
            setForm(prev => ({...prev, email: event.target.value}));
          }}/>
          <FileInput label='License' value={form.license}/>
        </div> : <RestaurantBuilder/>}
        <div style={{
          display: 'flex',
          justifyContent: 'end'
      }}>
        {stage === "builder" ? <Button onClick={e => {
            setStage("form");
          }}
          label="Prev"/> : null}
          <Button label="Next" onClick={() => {
            setStage("builder");
          }}/>
        </div>
      </div>);
}

export default RestaurantForm;