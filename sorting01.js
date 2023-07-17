//1. Create a custom sorting function which sorts an array of numbers in ascending order.
let nums = [2,1,4,3,5];
function sortingNums(nums){
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(nums[j]>nums[j+1]){
                let temp = nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=temp;
            }
        }
    }
}
sortingNums(nums)
console.log(nums)
