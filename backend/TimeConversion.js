function timeConversion(s) {
  let str = String(s);
  if (str.startsWith("12:00:00")) {
    if (str.endsWith("AM")) {
      return "00:00:00";
    }
    if (str.endsWith("PM")) {
      return "12:00:00";
    }
  }

  let splits = str.split(":");
  if (splits[0] === "12" && str.endsWith("AM")) {
    return "00" + ":" + splits[1] + ":" + stripAMandPM(splits[2]);
  } else if (str.endsWith("PM")) {
    let hour = parseInt(splits[0]);
    if (hour < 12) {
      let corrHour = hour + 12;
      return corrHour + ":" + splits[1] + ":" + stripAMandPM(splits[2]);
    } else {
      return hour + ":" + splits[1] + ":" + stripAMandPM(splits[2]);
    }
  } else {
    return splits[0] + ":" + splits[1] + ":" + stripAMandPM(splits[2]);
  }
}

function stripAMandPM(s) {
  let str = String(s);
  return str.replace("AM", "").replace("PM", "");
}

// 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
console.log(timeConversion("12:00:00AM"));
// 12:xy:abAM on a 12-hour clock is 00:xy:ab on a 24-hour clock.
console.log(timeConversion("12:12:33AM"));
// 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
console.log(timeConversion("12:00:00PM"));
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:01:00PM"));
