const success = (position: {
  coords: { latitude: string; longitude: string };
}) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  return { latitude, longitude };
};

function error() {
  return 'Unable to retrieve your location';
}

const getGeolocation = async () => {
  if (navigator.geolocation) {
    return await navigator.geolocation.getCurrentPosition(success.bind, error);
  } else {
    {
      error: 'Location not available';
    }
  }
};

export { getGeolocation };
