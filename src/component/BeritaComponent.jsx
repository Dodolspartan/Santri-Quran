// src/components/PrayerTimes.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const BeritaComponent = () => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const city = "Jakarta";

      try {
        const response = await axios.get(
          `http://api.aladhan.com/v1/calendarByCity?city=${city}&country=Indonesia&method=2&month=${month}&year=${year}`,
        );
        const todayTimes = response.data.data[today.getDate() - 1].timings;
        setPrayerTimes(todayTimes);
        setLoading(false);
      } catch (error) {
        setError("Error fetching prayer times");
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="prayer-times">
      <h5 className="text-center fw-bold">Jadwal Sholat Hari Ini</h5>
      <div className="current-time text-center">
        <strong>Waktu Saat Ini: {formatTime(currentTime)}</strong>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sholat</th>
            <th>Waktu</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(prayerTimes).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{prayerTimes[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BeritaComponent;
