'use client';

import FileInput from '@/components/FileInput';
import DataCard from '@/components/DataCard';
import { useFormContext } from '@/providers/form_provider';

const RestaurantForm = () => {
  const { form, setForm } = useFormContext();
  return (
    <div style={{
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
        <div style={{
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
        <FileInput key='1' label='License' onChange={(event) => {
          console.log(event.target.files![0]);
          setForm(prev => ({...prev, license: event.target.files![0]}));
          }}/>
        <FileInput key='2' label='FSSAI License' onChange={(event) => {
          console.log(event.target.files![0]);
          setForm(prev => ({...prev, fssai_license: event.target.files![0]}));
          }}/>
        <FileInput key='3' label='Water Certification' onChange={(event) => {
          console.log(event.target.files![0]);
          setForm(prev => ({...prev, water_certificate: event.target.files![0]}));
          }}/>
        <FileInput key='4' label='Labour License' onChange={(event) => {
          console.log(event.target.files![0]);
          setForm(prev => ({...prev, labour_license: event.target.files![0]}));
          }}/>
        </div>
        
      </div>);
}

export default RestaurantForm;