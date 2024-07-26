export default function _date_(data) {
  const _month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if(data) {
    const _deadline = new Date(data).getMonth();
    
    for (let i = 0; i < _month.length; i++) {
        if(_deadline === i) {
            const _getMonth = _month[i];
            return _getMonth;
        }
    }
  }
}
