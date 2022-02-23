export interface DonorAccount {
  isCompany: boolean;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  address: string;
  phone: string;
}

export const initialValues = {
  DONOR_ACCOUNT: <DonorAccount>{
    isCompany: false,
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    address: "",
    phone: "",
  },
};
