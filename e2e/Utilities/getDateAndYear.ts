export function getDateAndYear(monthIncrement: number) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    date.setMonth(date.getMonth() + monthIncrement, 1);
    var expectedDate = new Date(date);
    var month = expectedDate.getMonth().toString();
    return monthNames[parseInt(month)] + " " + date.getFullYear();
}
