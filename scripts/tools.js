/**
 * Created by Andreas on 17/12/2015.
 */

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color.toString();
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function datePicker() {
    var monthSelected = document.getElementById("month").value;
    var yearSelected = document.getElementById("year").value;

    if (monthSelected == 0) {
        monthSelected = 1;
    }
    if (yearSelected == 0) {
        yearSelected = 1984;
    }

    var monthDays = daysInMonth(monthSelected, yearSelected);

    var days = document.getElementById("day").innerHTML;
    days = "";
    days = "<option value='0'>day</option>";
    for (var i = 1; i <=  monthDays; i++) {
        days += "<option value='" + i + "'>" + i + "</option>";
    }

}

function setDateSelector() {

    var months = "<option value='0'>month</option>" +
        "<option value='1'>January</option>" +
        "<option value='2'>February</option>" +
        "<option value='3'>March</option>" +
        "<option value='4'>April</option>" +
        "<option value='5'>May</option>" +
        "<option value='6'>June</option>" +
        "<option value='7'>July</option>" +
        "<option value='8'>August</option>" +
        "<option value='9'>September</option>" +
        "<option value='10'>October</option>" +
        "<option value='11'>November</option>" +
        "<option value='12'>December</option>";

    var days = "<option value='0'>day</option>";
    for (var i = 1; i <= 31; i++) {
        days += "<option value='" + i + "'>" + i + "</option>";
    }

    var years = "<option value='0'>year</option>";
    for (var j = 2015; j > 1900; j--) {
        years += "<option value='" + j + "'>" + j + "</option>";
    }

    document.getElementById("date-picker").innerHTML = "<select id='month' onchange='datePicker()'>" + months + "</select>" +
        "<select id='day'>" + days + "</select>" +
        "<select id='year' onchange='datePicker()'>" + years + "</select>";
}