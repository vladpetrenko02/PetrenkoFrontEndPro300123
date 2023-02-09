const chOperand = prompt('Print the name of operand you want to choose: "Add","Sub","Mult" or "Div"').toLowerCase();
const frstNum = Number(prompt("Print first number"));
const scndNum = Number(prompt("Print second number"));

switch(chOperand) {
    case "add":
        alert(`${frstNum} + ${scndNum} = ${frstNum + scndNum}`);
        break;
    case "sub":
        alert(`${frstNum} - ${scndNum} = ${frstNum - scndNum}`);
        break;
    case "mult":
        alert(`${frstNum} * ${scndNum} = ${frstNum * scndNum}`);
        break;
    case "div":
        alert(`${frstNum} / ${scndNum} = ${frstNum / scndNum}`);
        break;
    default:
        alert("Some Exception");
        break;
}