let arr = ['я', 'умею', 'писать', 'рекурсивные', 'функции'];

function consoleRec(arr, count)
{
    function getElements(count) {
        console.log(arr[count])
    }
    getElements(count++);
    if (count < arr.length) {
        return consoleRec(arr, count++);
    }

}

module.exports = consoleRec(arr, 0);