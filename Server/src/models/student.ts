export interface Parent {
    fullName: string;
    contact: string;
}

export interface Student {
    id: string;
    fullName: string;
    dateOfBirth: string;
    idNumber: string;
    iin: string;
    phone: string;
    homeAddress: string;
    parents: Parent[];
    cityResidence: string;
}