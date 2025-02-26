const REGEX = /^[1-9]\d*$/;
const HOURLY_RATE = 75;
const OT_RATE = 1.5;
const REGULAR_HOURS = 40;

function getRegularPay(hrsWorked) {
    return Math.min(hrsWorked, REGULAR_HOURS) * HOURLY_RATE;
}

function getOvertimeHrs(hrsWorked) {
    return Math.max(0, hrsWorked - REGULAR_HOURS);
}

function getOvertimePay(overtimeHrs) {
    return overtimeHrs * (HOURLY_RATE * OT_RATE);
}

$(document).ready(function() {
    $('#submitBtn').click(function () {
        let hrsWorked = $('#hrsWorked').val().trim();

        if(hrsWorked === '') {
            $("#errorCardBody").text("Invalid input! Please enter a positive integer greater than 0.");
            $("#errorCard").removeAttr("hidden"); // Unhide the error card
            return
        }

        if (!REGEX.test(hrsWorked)) {
            $("#errorCardBody").text("Invalid input! Please enter a positive integer greater than 0.");
            $("#errorCard").removeAttr("hidden"); // Unhide the error card
            return
        }

        $("#errorCard").attr("hidden", true);// Hide the error card

        hrsWorked = parseInt(hrsWorked, 10);

        let regularPay = getRegularPay(hrsWorked);
        let overtimeHrs = getOvertimeHrs(hrsWorked);
        let overtimePay = getOvertimePay(overtimeHrs);
        let weeklyGrossPay = regularPay + overtimePay;

        let table = `
            <table class="table table-bordered">
                <tr><td>Regular Pay</td><td>₱ ${regularPay.toFixed(2)}</td></tr>
                <tr><td>Overtime Hours</td><td>${parseInt(overtimeHrs)}</td></tr>
                <tr><td>Overtime Pay</td><td>₱ ${overtimePay.toFixed(2)}</td></tr>
                <tr><td>Weekly Gross Pay</td><td>₱ ${weeklyGrossPay.toFixed(2)}</td></tr>
            </table>
        `

        $("#modalBody").html(table);
        $("#resultModal").modal("show");
    });
});