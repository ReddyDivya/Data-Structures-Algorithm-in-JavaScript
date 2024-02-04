/*
Two Sum
arr = [2, 7, 11, 15] target = 9
*/

const TwoSum = (arr, target) => {
    for(let i=0; i < arr.length; i++)
    {
        for(let j=i+1; j < arr.length; j++)
        {
            if(arr[i]+arr[j] === target)
                return [i, j];
        }
    }
}

console.log("1. Using for loop");
console.log(TwoSum([2, 7, 11, 15], 9));//[0, 1]
console.log(TwoSum([3, 2, 4], 6));//[1, 2]
console.log(TwoSum([1, 12, 3, 7], 10));//[2, 3]
console.log("-------------");

const TwoSum2 = (nums, target) => {
    let obj = {};

    for(let i = 0; i < nums.length; i++)
    {
        let n = nums[i];
        if(obj[target - n] !== undefined)//poistive numbers
        {
            return [obj[target - n], i];
        }

        obj[n] = i;
    }
}

console.log("2. Using Objects");
console.log(TwoSum2([2, 7, 11, 15], 9));//[0, 1]
console.log(TwoSum2([3, 2, 4], 6));//[1, 2]
console.log(TwoSum2([1, 12, 3, 7], 10));//[2, 3]
