function formatDateToInput(daysToAdd) {
  const dateUnformatted = new Date();
  dateUnformatted.setDate(dateUnformatted.getDate() + daysToAdd);

  const dateArray = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(dateUnformatted);

  const date = dateArray.reduce((lastValue, currentValue) => {
    if (currentValue.type === 'day' || currentValue.type === 'month' || currentValue.type === 'year') {
      return {
        ...lastValue,
        [currentValue.type]: currentValue.value,
      };
    }
    return lastValue;
  }, {});

  return `${date.year}-${date.month}-${date.day}`;
}

export default formatDateToInput;
