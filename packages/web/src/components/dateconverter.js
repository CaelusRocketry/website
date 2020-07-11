const converter = (datetime) => {
  const monthDecoder = {
    "01": "January",
    "02": "Febraury",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };

  let day = datetime.slice(8, 10);
  let month = datetime.slice(5, 7);
  let year = datetime.slice(0, 4);

  return monthDecoder[month] + " " + day + ", " + year;
};

export default converter;
