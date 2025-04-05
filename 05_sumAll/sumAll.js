const sumAll = function(start, end) {
    let total=0;
    if (!Number.isInteger(start) ||!Number.isInteger(end)) return "ERROR";
    if (start < 0 || end < 0) return "ERROR";
    if (start < end)
        {
            for (i=start; i<=end;i++)
                {
                    total=total+i;
                }
        } else
        {
            for (i=end; i<=start;i++)
                {
                    total=total+i;
                }
        }
        
    return total;
    
};

// Do not edit below this line
module.exports = sumAll;
