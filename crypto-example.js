import crypto from 'crypto';

const generateRandomString = (length) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(length, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        const randomString = buffer.toString('base64')
          .replace(/[/+]/g, '')
          .slice(0, length);
        resolve(randomString);
      }
    });
  });
};

generateRandomString(16).then((result) => {
  console.log(result);
}).catch((err) => {
  console.error(err);
});
