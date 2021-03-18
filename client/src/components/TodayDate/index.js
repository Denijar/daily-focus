import React, { useState, useEffect } from "react";

import styles from "./style.module.scss";

function TodayDate() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = [
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

    const getTodayDate = (dateObject) => {
        let time = dateObject.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        });
        let day = days[dateObject.getDay()];
        let date = dateObject.getDate();
        let month = months[dateObject.getMonth()];

        return `${time} | ${day} ${date} ${month}`;
    };

    const [dateObject, setDateObject] = useState(new Date());

    useEffect(() => {
        let interval = setTimeout(() => setDateObject(new Date()), 1000);

        return () => clearTimeout(interval);
    }, [dateObject]);

    return <div className={styles.text}>{getTodayDate(dateObject)}</div>;
}

export default TodayDate;
