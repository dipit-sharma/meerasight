// @ts-nocheck
"use client";
import { services } from "@/app/services/constants";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useState } from "react";
import { timeSlots } from "./constants";
import "./style.css";

export default function Booking() {
  const params = useParams();
  const { service: service_id } = params ?? {};

  const [date, setDate] = useState(dayjs(new Date()));
  const [time, setTime] = useState(timeSlots[0].value);
  const [service, setService] = useState(
    services[Number(service_id) ?? 0].content
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handler = async () => {
    if (!validateForm()) {
      return;
    }

    const res = await fetch("/api/send-whatsapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: phone.trim(),
        time: `${time} at ${date.format("DD-MM-YYYY")}`,
      }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Booking confirmed!");
    } else {
      alert("Failed to confirm booking.");
    }
  };

  const validateForm = () => {
    const errors = {};
    const today = dayjs();

    // Name validation (only letters and spaces)
    if (!name.trim().length) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      errors.name = "Name can only contain letters and spaces";
    }

    // Phone validation (10 digits only)
    if (!phone.trim().length) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    // Time validation
    if (!time) {
      errors.time = "Time slot is required";
    }

    // Service validation
    if (!service) {
      errors.service = "Service selection is required";
    }

    // Date validation
    if (!date) {
      errors.date = "Date is required";
    } else {
      const selectedDate = dayjs(date);
      if (selectedDate.isBefore(today, "day")) {
        errors.date = "Date must be today or a future date";
      } else if (selectedDate.day() === 4) {
        errors.date = "Appointments are not available on Thursdays";
      }
    }

    setErrors(errors);
    console.log(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <div className="booking">
      <Typography component="h2">Book Your Appointment</Typography>
      <div className="booking_cnt">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "100%" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: 4,
                marginBottom: 12,
              }}
            >
              <div>
                <div>Patient Name</div>
                <TextField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="standard"
                  placeholder="Patient Name"
                  error={!!errors?.name}
                  helperText={errors?.name}
                />
              </div>
              <div>
                <div>Email (optional)</div>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="standard"
                  placeholder="Email"
                />
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: 4,
                marginBottom: 12,
              }}
            >
              <div>
                <div>Phone Number</div>
                <TextField
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  variant="standard"
                  placeholder="Phone Number"
                  error={!!errors?.phone}
                  helperText={errors?.phone}
                />
              </div>
              <FormControl style={{ width: "50%" }} error={!!errors?.time}>
                <TextField
                  id="standard-select-currency"
                  select
                  label="Select a time slot"
                  defaultValue="EUR"
                  variant="outlined"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  {timeSlots.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.value}
                    </MenuItem>
                  ))}
                </TextField>
                {errors?.time && (
                  <Typography color="error">{errors?.time}</Typography>
                )}
              </FormControl>
            </div>
            <div>
              <div>Service Name</div>
              <FormControl fullWidth error={!!errors?.service}>
                <Select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {services.map((item) => (
                    <MenuItem key={item.content} value={item.content}>
                      {item.content}
                    </MenuItem>
                  ))}
                </Select>
                {errors?.service && (
                  <Typography color="error">{errors?.service}</Typography>
                )}
              </FormControl>
            </div>
            <div style={{ width: "100%", marginTop: "12px" }}>
              <div>Message</div>
              <TextField
                fullWidth
                multiline
                variant="standard"
                placeholder="Message"
              />
            </div>
          </div>

          <div className="booking" style={{ width: "100%", marginTop: 24 }}>
            <Button
              className="booking_btn"
              onClick={handler}
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#d274cd" }}
            >
              Book Appointment
            </Button>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <Typography component="h2">Select a date</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={date}
              onChange={(newValue) => setDate(newValue)}
              disablePast
            />
            {errors?.date && (
              <Typography color="error">{errors?.date}</Typography>
            )}
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
}
