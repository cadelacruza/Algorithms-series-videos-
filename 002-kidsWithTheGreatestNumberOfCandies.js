var kidsWithCandies = function(candies, extraCandies) {
    const greatest = Math.max(...candies);
    const result = [];

    for(let i = 0; i < candies.length; i++){
        result.push(candies[i] + extraCandies >= greatest);
    }

    return result;
};

//candies = [1,2,45]  =>  1,2,25