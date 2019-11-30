const checkStatus = (response: any) => {
  if (response.status === 200) {
    return response;
  } else {
    return { error: 'something went Wrong' };
  }
};

export { checkStatus };
