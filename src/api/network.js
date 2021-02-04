import Client from "../apiClients/Client";

export const callToServer = (method, url, data, v = "v1") => {


  return new Promise((resolve, reject) => {

    Client({method, url, data}).then(res => {

      // if("success" in res.data && res.data.success === false)
      // {
      //   console.log(res, "----->>> Success false network.js <<<-----");
      //   reject(res.data.message);
      // }
      // else {
      //   resolve(res);
      // }
        resolve(res);

    }).catch(err => {

      console.error(err);
      reject("Network error, Check your server");
    });
  });
};
