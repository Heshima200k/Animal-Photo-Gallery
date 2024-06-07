function hasContiguousSubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        // Shrink the window as long as the current sum is greater than the target
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // Check if the current sum equals the target
        if (currentSum === target) {
            return true;
        }
    }

    return false;
}
