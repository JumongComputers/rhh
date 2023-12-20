export interface AdminDashboard {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  roomType: string;
  roomNum: string;
  status: string;
}

export interface AddAdminTypes {
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNum: number;
}
