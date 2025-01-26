export function getDateAndYearRelativeToCurrentDate(monthIncrement: number) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + monthIncrement, 1);
    var expectedDate = new Date(currentDate);
    var month = expectedDate.getMonth().toString();
    return monthNames[parseInt(month)] + " " + currentDate.getFullYear();
}
