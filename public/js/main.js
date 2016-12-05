(function() {

  let simpleApp = angular.module("simpleApp", []);

  simpleApp.controller('TaskController', function() {
    let vm = this;
    vm.onPow = number => {
      if (number <= 1 || !number) {
        return 0;
      }
      else {
        let k = 0;
        let kPow = Math.pow(4, k);
        while (number > kPow) {
          kPow = Math.pow(4, k++);
        }
        return k-2;
      }
    };

    vm.congruenceOfSquares = num => {
      if (!num) {
        return 0;
      }
      else {
        return +((Math.sqrt(num / 2)).toFixed(2));
      }
    };


    vm.allSquaredPairs = (num) => {
      const pairs = [];
      for (let i = 0; i <= Math.sqrt(num / 2); i++) {
        const j = Math.sqrt(num - i * i);
        if (j % 1 == 0) {
          pairs.push([j, i]);
        }
      }
      return pairs;
    };
  });

}());

