"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { calculateAge } from "@/utils/helper";

// CHILD 1
const Input = ({ label, min = 1, max, placeholder, state, setState }) => {
    return (
        <label id={label} htmlFor={label}>
            <div className="pb-1 text-[11px] font-extrabold tracking-[3px] text-smokeyGrey ">
                {`${label}`.toUpperCase()}
            </div>
            <input
                className="number-to-text m-0 w-full rounded-md border border-lightGray px-3 py-2 text-xl font-extrabold focus-within:outline-none focus:outline-none focus-visible:outline-none "
                type="number"
                name={label}
                id={label}
                min={min}
                max={max}
                placeholder={placeholder.toUpperCase()}
                value={state}
                autoComplete="off"
                required
                onChange={(e) => {
                    if (e.target.value > max) {
                        event.target.classList.add("border-red-600");
                        setState(e.target.value);
                        document
                            .querySelector(`#${label} > div`)
                            .classList.add("!text-lightRed");
                    } else {
                        event.target.classList.remove("border-red-600");
                        setState(e.target.value);
                        document
                            .querySelector(`#${label} > div`)
                            .classList.remove("!text-lightRed");
                    }
                }}
            />
        </label>
    );
};

// CHILD 2
const TextResult = ({ number, text }) => {
    return (
        <div>
            <span className="text-7xl font-extrabold text-purple">
                {number}
            </span>
            <span className="text-7xl font-extrabold">{" " + text}</span>
        </div>
    );
};

// PARENT
const Card = () => {
    // Current date
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month index
    let currentDay = currentDate.getDate();

    const [isInitialRender, setIsInitialRender] = useState(true);

    const [days, setDays] = useState("");
    const [months, setMonths] = useState("");
    const [years, setYears] = useState("");
    const [age, setAge] = useState({
        year: "--",
        month: "--",
        day: "--",
    });

    useEffect(() => {
        // this will ensure that useEffect won't run on initial
        if (isInitialRender) {
            setIsInitialRender(false);
        } else {
            // Calculate Age
            const dateOfBirth = years + "-" + months + "-" + days;

            const age = calculateAge(dateOfBirth);

            setAge({
                year: age.years ? age.years : 0,
                month: age.months ? age.months : 0,
                day: age.days ? age.days : 0,
            });
        }
    }, [days, months, years]);

    return (
        <>
            <main className="flex h-full w-full items-center justify-center bg-white">
                <div className="m-5 w-[600px] rounded-lg rounded-br-[10rem] p-7 shadow-md ">
                    <div className="mb-10 font-thin text-xl text-smokeyGrey">How old are you ?</div>
                    {/* FORM */}
                    <form
                        className="flex justify-between gap-3 md:w-4/5"
                        action="#"
                    >
                    
                        <Input
                            label="day"
                            // max={ 31}
                            max={31 || currentDay}
                            placeholder="DD"
                            state={days}
                            setState={setDays}
                        />
                        <Input
                            label="month"
                            // max={12}
                            max={12 || currentMonth}
                            placeholder="MM"
                            state={months}
                            setState={setMonths}
                        />
                        <Input
                            label="year"
                            max={currentYear}
                            placeholder="YYYY"
                            state={years}
                            setState={setYears}
                        />
                    </form>
                    <span
                        id="error-msg"
                        className="text-xs text-lightRed"
                    ></span>

                    {/* IMAGE */}
                    <div className="relative mb-12 mt-14 md:my-10">
                        <hr />
                        <Image
                            className="absolute -top-8 left-1/2 rounded-full bg-purple p-3 md:left-[90%]"
                            src="/icon-arrow.svg"
                            alt="Arrow"
                            width="60"
                            height="60"
                        />
                    </div>

                    {/* TEXT */}
                    
                    <TextResult
                        number={age.year}
                        text={age.year > 9 ? "years" : "year"}
                    />
                    <TextResult
                        number={age.month}
                        text={age.month > 1 ? "months" : "month"}
                    />
                    <TextResult
                        number={age.day}
                        text={age.day > 1 ? "days" : "day"}
                    />
                </div>
            </main>
        </>
    );
};

export default Card;
