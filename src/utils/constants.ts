export interface DonorAccount {
	isCompany: boolean;
	firstName: string;
	lastName: string;
	company: string;
	email: string;
	address: string;
	phone: string;
}

export interface LoginInfo {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmation: string;
}

export const initialValues = {
	DONOR_ACCOUNT: <DonorAccount>{
		isCompany: false,
		firstName: '',
		lastName: '',
		company: '',
		email: '',
		address: '',
		phone: '',
	},
	LOGIN_INFO: <LoginInfo>{
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmation: '',
	},
};
