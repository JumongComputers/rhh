export interface AdminDashboard {
  _id: string;
  vehicleType: string;
  vehiclePlateNum: string;
  vehicleName: string;
  affliliation: string;
  vehicleColor: string;
  status: string;
  UserId: { _id: string } | string;
  AdminId: { _id: string } | string;
}
