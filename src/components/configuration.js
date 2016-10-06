export const setVehicleId = id => {
  localStorage.setItem('leaseVehicleId', id);
};

export const getVehicleId = () => {
  return localStorage.getItem('leaseVehicleId');
};

export const setLeaseData = (name, value) => {
  const id = getVehicleId() || '1';
  const data = getLeaseData();
  data[name] = value;
  localStorage.setItem(`leaseData_${id}`, JSON.stringify(data));
};

export const getLeaseData = () => {
  const id = getVehicleId() || '1';
  setVehicleId(id);
  return JSON.parse(localStorage.getItem(`leaseData_${id}`) || '{}');
};
