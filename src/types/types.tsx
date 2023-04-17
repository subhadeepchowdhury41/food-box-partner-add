import { Dispatch, SetStateAction } from "react"

export interface Form {
  name: string,
  phone: string,
  email: string,
  description: string,
  license?: Blob,
  fssai_license?: Blob,
  labour_license?: Blob,
  water_certificate?: Blob,
  address: string
}
  
export interface FoodItem {
  id: number,
  name?: string,
  description?: string,
  type?: "veg" | "non-veg" | null | undefined
}
  
export interface Counter {
  id: number
  name?: string
  items: FoodItem[]
}
  
export interface FormContextType {
  form: FormType,
  setForm: Dispatch<SetStateAction<Form>>,
  counters: Counter[],
  setCounters: Dispatch<SetStateAction<Counter[]>>,
  stage: string,
  setStage: Dispatch<SetStateAction<stage>>,
  sendJoiningRequest: () => Promise<void>
}
    
export type stage = "form" | "builder";
export type FormType = Form;
  