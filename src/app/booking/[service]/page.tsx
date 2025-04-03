"use client";
import { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { timeSlots } from "./constants";
import "./style.css";
import { useRouter } from "next/navigation";
import { services } from "@/app/services/constants";

export default function Booking() {
  const router = useRouter();
  const [date, setDate] = useState(dayjs(new Date()));
  const [time, setTime] = useState(timeSlots[0].value);
  const [service, setService] = useState(
    services[Number(router?.query?.service ?? 0)]?.content
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  // const handler = () => {
  //   try {
  //     addEvent({
  //       name: "Patient Name",
  //       email: "ds.techin@gmail.com",
  //       date: "2025-03-30T09:00:00-08:00",
  //       message: "Some message",
  //       serviceName: "service name",
  //       endDate: "2025-03-30T10:00:00-08:00",
  //     })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const validateForm = () => {
    const errors = {
      name: "",
      phone: "",
      time: "",
      service: "",
      date: "",
    };
    const today = dayjs();

    // Name validation (only letters and spaces)
    if (!name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      errors.name = "Name can only contain letters and spaces";
    }

    // Phone validation (10 digits only)
    if (!phone.trim()) {
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
      } else if (selectedDate.day() !== 4) {
        errors.date = "Appointments are only available on Thursdays";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted", {
        name,
        email,
        phone,
        time,
        service,
        date,
      });
    }
  };

  return (
    <div className="booking">
      <Typography component="h2">Book Your Appointment</Typography>
      <div style={{ display: "flex", width: "100%" }}>
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
                <InputLabel>Time Slot</InputLabel>
                <Select value={time} onChange={(e) => setTime(e.target.value)}>
                  {timeSlots.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.value}
                    </MenuItem>
                  ))}
                </Select>
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
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#d274cd" }}
            >
              Book Appointment
            </Button>
          </div>
        </div>
        <div style={{ width: "100%" }}>
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
