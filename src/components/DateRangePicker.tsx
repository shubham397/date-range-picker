// DateRangePicker.tsx
import React, { useState } from "react";
import "./dateRangePicker.css";

const getFormattedDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
    if (endDate && new Date(e.target.value) > new Date(endDate)) {
      setEndDate("");
    }
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="date-picker-container">
      <h3>Select Date Range</h3>

      <div className="inputs">
        <div>
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={handleStartChange}
            max={endDate || undefined}
          />
        </div>

        <div>
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={handleEndChange}
            min={startDate || undefined}
          />
        </div>
      </div>

      {startDate && endDate && (
        <p className="summary">
          📅 Selected: {getFormattedDate(startDate)} →{" "}
          {getFormattedDate(endDate)}
        </p>
      )}
    </div>
  );
};

export default DateRangePicker;
