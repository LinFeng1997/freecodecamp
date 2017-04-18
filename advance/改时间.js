 function makeFriendlyDates(arr) {
     var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     var dayArray = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th"];
     var year, month, day, newDate, newDate2, temp, temp2;
     //先把第一个元素转了，再考虑后面的
     temp = arr[0].split("-");
     // year = parseInt(temp[0]);
     // month = parseInt(temp[1]);
     // day = parseInt(temp[2]);
     newDate = monthArray[temp[1] - 1] + " " + dayArray[temp[2] - 1] + ", " + temp[0];
     temp2 = arr[1].split("-");
     if (temp[0] === temp2[0] && temp[1] === temp2[1] && temp[2] === temp2[2]) {
         return [newDate];
     }
     // 三条规则：如果一个日期区间里结束日期与开始日期相差小于一年
     if ((temp[0] === temp2[0]) || (temp2[0] - temp[0] === 1 && temp2[1] < temp[1]) || (temp2[0] - temp[0] === 1 && temp2[1] === temp[1] && temp2[2] < temp[2])) {
         console.log("小于一年");
         //则结束日期就不用写年份。
         newDate2 = monthArray[temp2[1] - 1] + " " + dayArray[temp2[2] - 1];
         // 月份开始和结束日期如果在同一个月，则结束日期月份就不用写了。
         if (temp[0] === temp2[0] && temp[1] === temp2[1]) {
             newDate = monthArray[temp[1] - 1] + " " + dayArray[temp[2] - 1];
             newDate2 = dayArray[temp2[2] - 1];
         }
         // 另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。
         if (temp2[0] - temp[0] === 1 && (temp2[1] < temp[1]) || (temp2[1] === temp[1]) && temp2[2] < temp2[2]) {
             newDate = monthArray[temp[1] - 1] + " " + dayArray[temp[2] - 1];
         }
     } else {
         console.log("大于一年");
         newDate2 = monthArray[temp2[1] - 1] + " " + dayArray[temp2[2] - 1] + ", " + temp2[0];
     }
     return [newDate, newDate2];
 }

 makeFriendlyDates(["2018-01-13", "2019-01-12"]);




// 参考写法
function makeFriendlyDates(str) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Convert a YYYY-MM-DD string into a date object.
  // 转成日期对象
  function convertDate(str) {
    // Split the dates to work independently.
    var dateStr = str.split('-');

    // Force the dates into Universal time to avoid issues due to timezones.
    //UTC转毫秒
    return (new Date(Date.UTC(dateStr[0], dateStr[1] - 1, dateStr[2])));

  }

  // Handles the case of the day's endings.
  // 比30天都出来好多了
  function dateEnding(val) {
    switch (val) {
      case 1:
      case 21:
      case 31:
        return val + 'st';
      case 2:
      case 22:
        return val + 'nd';
      case 3:
      case 23:
        return val + 'rd';
      default:
        return val + 'th';
    }
  }

  // Checks for the real difference in months to avoid errors
  // 月份比较
  function monthDiff(date1, date2) {
    var month2 = date2.getUTCFullYear() * 12 + date2.getUTCMonth();
    var month1 = date1.getUTCFullYear() * 12 + date1.getUTCMonth();
    return month2 - month1;
  }

  //day diff
  // 日期比较
  function dayDiff(date1, date2) {
    if(date2.getUTCMonth() === date1.getUTCMonth()){
      return date1.getUTCDate()-date2.getUTCDate();
    }
    return 0;
  }

  // Get's the right month string.
  function getMonth(date) {
    return months[date.getUTCMonth()];
  }

  function displayDate() {

    // Handles same day
    if (date2.getTime() - date1.getTime() === 0) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear()];
    }

    // Handles same month
    if (date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCFullYear() === date2.getUTCFullYear()) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), dateEnding(date2.getUTCDate())];
    }

    // Handles more than a month of difference, but less than 12 months and different year
    if (monthDiff(date1, date2) < 12 && date1.getUTCFullYear() !== date2.getUTCFullYear() ) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles same month but different year
    if (monthDiff(date1, date2) <= 12 && dayDiff(date1, date2)>0) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate())+', '+date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles more than a month of difference, but less than 12 months and same year
    if (monthDiff(date1, date2) < 12) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate())+', '+date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles cases with more than 12 months apart.
    return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate()) + ', ' + date2.getUTCFullYear()];
  }

  var date1 = convertDate(str[0]);
  var date2 = convertDate(str[1]);

  return displayDate();

}

// test here
makeFriendlyDates(['2016-07-01', '2016-07-04']);

//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate