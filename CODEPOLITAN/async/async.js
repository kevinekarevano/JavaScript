// Request CallBack
const requestCallBack = (data, success, err) => {
  const delay = Math.floor(Math.random() * 4500) + 500;

  setTimeout(() => {
    if (delay > 4000) {
      err(`error ${delay}ms`);
    } else {
      success(`success ${data}, (${delay}ms)`);
    }
  }, delay);
};

// // requestCallBack(
// //   "user1",
// //   function (x) {
// //     console.log(x);
// //   },
// //   function (y) {
// //     console.log(y);
// //   }
// // );

// Promise Version
const requestPromise = (data) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;

    setTimeout(() => {
      if (delay > 4000) {
        reject(`error ${delay}ms`);
      } else {
        resolve(`success ${data}, (${delay}ms)`);
      }
    }, delay);
  });
};

// requestPromise("user1")
//   .then((response) => {
//     console.log("berhasil", response);
//   })
//   .then(() => {
//     console.log("berhasil2");

//   })
//   .then(() => {
//     console.log("berhasil3");
//   })
//   .catch((err) => {
//     console.log("gagal", err);
//   });

const contohPromise = () => {
  return new Promise((resolve, reject) => {
    resolve(() => {
      console.log("berhasil");
    });

    reject(() => {
      "gagal";
    });
  });
};

const changeColor = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

const ubahWarna = async () => {
  await changeColor("red", 1000); // await hanya bisa dipakai di dalam function async
  await changeColor("cyan", 1000);
  await changeColor("green", 1000);
  await changeColor("blue", 1000);
  return `all done`;
};

// const pelangin = async () => {
//   await ubahWarna();
//   return `alldone`;
// };

// pelangin().then((ress) => console.log(ress));

// ubahWarna().then((ress) => {
//   console.log(ress);
// });

// changeColor("red", 1000)
//   .then(() => {
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     return changeColor("yellow", 1000);
//   })
//   .then(() => {
//     return changeColor("salmon", 1000);
//   })
//   .then(() => {
//     return changeColor("blue", 1000);
//   });

const sayHello = async (name) => {
  throw `maaf ${name}, tidak kenal`;
};

// sayHello('vin').then((res) => {
//   console.log('response', res)
// }).catch((err) => {
//   console.log('error', err)
// })


const errHandler = async () => {
  let result = await requestPromise('ise')
  console.log('hello')
}

