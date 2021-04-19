export const checkCode = async (code: string) => {
  const url = `http://localhost:3001/check/${code}`;
  return fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log('result', data.result);
    return data.result;
  });
}