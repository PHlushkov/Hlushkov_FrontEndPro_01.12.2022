const step = () => {
  let count = 0;
  return function (num) {
    count += num;
    console.log(count);
  };
};

const sum = step();

sum(3);
sum(5);
sum(20);
