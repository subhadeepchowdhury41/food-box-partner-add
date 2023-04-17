'use client';

import { createContext, useState, useContext, useEffect } from "react";
import { FormContextType, FormType, Counter, stage } from '../types/types';
import { sendPartnerJoinRequest } from "@/services/api_collection";

const FormContext = createContext<FormContextType>({
    form: {
        name: "",
        description: "",
        email: "",
        phone: "",
        address: ""
    },
    setForm: (prev) => {},
    counters: [],
    setCounters: (prev) => { },
    stage: "form",
    setStage: (prev) => { },
    sendJoiningRequest: async () => {}
});

export const FormContextProvider = ({
    children
}: {
    children: React.ReactNode
    }): JSX.Element => {
    
    const sendJoiningRequest = async () => {
        await sendPartnerJoinRequest({
            form,
            counters
        });
    }
    const [form, setForm] = useState<FormType>({
      name: "",
      description: "",
      email: "",
      phone: "",
      address: ""
    });
  
    const [counters, setCounters] = useState<Counter[]>([]);
    const [stage, setStage] = useState<stage>("form");

    return (<FormContext.Provider value={{
        form,
        setForm,
        counters,
        setCounters,
        stage,
        setStage,
        sendJoiningRequest
    }}>
        { children }
    </FormContext.Provider>);
}

export const useFormContext = () =>
    useContext<FormContextType>(FormContext);