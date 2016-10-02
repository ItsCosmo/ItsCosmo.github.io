export const setInitialMileage = value => {
  localStorage.setItem('leaseInitialMileage', value);
};

export const getInitialMileage = () => {
  return parseInt(localStorage.getItem('leaseInitialMileage'));
};

export const setTodayMileage = value => {
  localStorage.setItem('leaseTodayMileage', value);
};

export const getTodayMileage = () => {
  return parseInt(localStorage.getItem('leaseTodayMileage'));
};

export const setVehicleName = name => {
  localStorage.setItem('leaseVehicleName', name);
};

export const getVehicleName = () => {
  return localStorage.getItem('leaseVehicleName');
};

export const setLeaseDate = date => {
  localStorage.setItem('leaseLeaseDate', date);
};

export const getLeaseDate = () => {
  return localStorage.getItem('leaseLeaseDate');
};

export const setLeaseTerm = term => {
  localStorage.setItem('leaseTerm', term);
};

export const getLeaseTerm = () => {
  return parseInt(localStorage.getItem('leaseTerm'));
};

export const setMileageAllotment = value => {
  localStorage.setItem('leaseAllotment', value);
};

export const getMileageAllotment = () => {
  return parseInt(localStorage.getItem('leaseAllotment'));
};