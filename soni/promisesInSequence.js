// How would you implement a function
// to execute an array of asynchronous tasks
// sequentially, collecting both resolved values and errors?

const createAsyncTask = () => {
  const number = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 5) {
        resolve(number);
      } else {
        reject(number);
      }
    }, number * 100);
  });
};

const tasks = [
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
  createAsyncTask,
];
async function handleAsyncTasksSequentially(tasks, cb) {
  // res
  const res = [];
  const errors = [];
  // forEach

  for (let task of tasks) {
    try {
      const successTask = await task();
      res.push(successTask);
    } catch (error) {
      errors.push(error);
    }
  }

  cb(res, errors);

  // return res
}

handleAsyncTasksSequentially(tasks, (res, errors) =>
  console.log("promises", res, errors)
);
