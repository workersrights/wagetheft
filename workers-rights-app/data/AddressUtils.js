/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-syntax */
const findNearestAddress = (addresses, searchLat, searchLong) => {
  const closestDistance = [Number.MAX_VALUE, ""];
  for (const latLongString of Object.keys(addresses)) {
    const [lat1, long1] = convertStringToCoords(latLongString);
    const dist = haversineDist(lat1, long1, searchLat, searchLong);
    if (dist < closestDistance[0]) {
      closestDistance[0] = dist;
      closestDistance[1] = latLongString;
    }
  }

  return closestDistance[1];
};

const convertStringToCoords = (coords) => {
  const [lat1String, long1String] = coords.split("|");
  const lat1FinalString = lat1String.replace(",", ".");
  const long1FinalString = long1String.replace(",", ".");
  const lat1 = parseFloat(lat1FinalString);
  const long1 = parseFloat(long1FinalString);

  return [lat1, long1];
};

const haversineDist = (lat1, long1, lat2, long2) => {
  const latDiff = (lat1 - lat2) / 2;
  const longDiff = (long1 - long2) / 2;
  const radiusEarth = 3961; // mi

  const dLat = (latDiff * Math.PI) / 180;
  const dLong = (longDiff * Math.PI) / 180;
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;

  const a =
    Math.sin(dLat) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLong) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return radiusEarth * c;
};

const isPhone = (address) => {
  if (address.street === "%phone%") {
    return true;
  }

  return false;
};

export { findNearestAddress, isPhone, haversineDist };
