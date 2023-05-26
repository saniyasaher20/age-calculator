import { DateTime } from "luxon";

export const calculateAge = (dateOfBirth) => {
    const today = DateTime.now();
    const birthDate = DateTime.fromFormat(dateOfBirth, "yyyy-M-d");

    const diff = today.diff(birthDate, ["years", "months", "days"]);
    if (diff.years < 0 || diff.months < 0 || diff.days < 0) {
        return {
            years: 0,
            months: 0,
            days: 0,
        }
    } else {
        return {
            years: Math.floor(diff.years),
            months: Math.floor(diff.months),
            days: Math.floor(diff.days),
        };
    }
};

// const dateOfBirth = "1990-06-15";
// const age = calculateAge(dateOfBirth);
