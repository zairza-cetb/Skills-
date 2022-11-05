const schedule = {
  registrationStart: new Date("2022-11-01 19:30:00"), // Registration starts for skills++
  registrationEnd: new Date("2022-11-09 00:00:00"), // Registration stops for skills++
  eventStart: new Date("2022-11-05 00:00:00"), // Skills++ event starts
  weekStart: new Date("2022-10-20 00:00:00"), // Week 1 starts for skills++
  weekInterval: 7 * 24 * 60 * 60 * 1000,
  maxWeekNos: 4,
};

export const getCurrentWeek = () => {
  const today = new Date().getTime();
  const diff = today - schedule.weekStart.getTime() + 1;
  let weekNo = 0;
  if (diff >= 0) weekNo = Math.floor(diff / schedule.weekInterval) + 1;
  return weekNo;
};
