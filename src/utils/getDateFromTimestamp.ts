export const getDateFromTimestamp = (timestamp: number) => {
 const date = new Date(0);
 date.setUTCSeconds(timestamp);

 const day = date.getDate();
 const month = date.toLocaleString("default", { month: "short" });
 const year = date.getFullYear();

 return { day, month, year };
};
