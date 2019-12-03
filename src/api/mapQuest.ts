const reverseGeocode = async (lat: number, lng: number) => {
  const mapQuestURL = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${lat},${lng}`;
  try {
    const response = await fetch(mapQuestURL);

    if (response.status === 200) {
      return parseLocationData((await response.json()).result[0]);
    }
  } catch (error) {
    return { error };
  }
};

const parseLocationData = (data: any) => {
  const { lat: latitude, lng: longitude } = data.providedLocation.latLng;

  return data.locations.map((location: any) => ({
    address: `${location.adminArea5}, ${location.adminArea3}`,
    coords: { latitude, longitude }
  }));
};

export { reverseGeocode, parseLocationData };
