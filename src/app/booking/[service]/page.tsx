"use client";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { addEvent } from "../../../../calendar";
import "./style.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import dayjs from "dayjs";
import { timeSlots } from "./constants";
import { services } from "@/app/services/constants";
import { useRouter } from "next/navigation";

export default function Booking() {
  const router = useRouter();
  const [date, setDate] = useState(dayjs(new Date()));
  const [time, setTime] = useState(timeSlots[0].value);
  const [service, setService] = useState(
    services[Number(router?.query?.service ?? 0)].content
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handler = () => {
    try {
      addEvent({
        name: "Patient Name",
        email: "ds.techin@gmail.com",
        date: "2025-03-30T09:00:00-08:00",
        message: "Some message",
        serviceName: "service name",
        endDate: "2025-03-30T10:00:00-08:00",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
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
                />
              </div>
              <div>
                <div>Email</div>
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
                />
              </div>
              <FormControl style={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-label">Time Slot</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={time}
                  label="Time Slot"
                  onChange={(val) => setTime(val.target.value)}
                >
                  {timeSlots.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <div>Serivce Name</div>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={service}
                  onChange={(val) => setService(val.target.value)}
                >
                  {services.map((item) => (
                    <MenuItem key={item.content} value={item.content}>
                      {item.content}
                    </MenuItem>
                  ))}
                </Select>
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

          <div style={{ width: "100%", marginTop: 24 }}>
            <Button
              onClick={handler}
              className="booking_btn"
              fullWidth
              variant="contained"
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
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
}
