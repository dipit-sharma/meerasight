import { gapi } from "gapi-script";

const calendarID = "family00426551324248813373@group.calendar.google.com"
const apiKey = "AIzaSyA035Mxvv_Z-bQujinBfE8Xeq0V81yA57o"
const apiToken = "ya29.a0AeXRPp5tEv_5vSGShggCIfIC7RAKCEIVa61AQSzmMaq_MK_1K5Hhh60_4d88DBQdc3pkgh2-sECyPs2VCHiSJ-HPC44vE12Xc-yBppUiPusQ-kwcKdDIBY17e-IhRzTgC-uK1u4ZOihHMY61eOyFp1h3dDXPAA2d31vrkW4YaCgYKAeMSARASFQHGX2Mi1wel3qEPLkZDl0o4N5IIUg0175"

export type TEvent = { serviceName: string; date: string; message: string; email: string; name: string; endDate: string }

const event = ({ serviceName, date, message, email, name, endDate }: TEvent) => (
  {
    "summary": serviceName,
    "location": "",
    "start": {
      "dateTime": date,
      "timeZone": "Asia/Kolkata"
    },
    "end": {
      "dateTime": endDate,
      "timeZone": "Asia/Kolkata"
    },
    "attendees": [
      {
        "email": "meerasight@gmail.com",
        "displayName": "Dr. Sonia Sharma",
        "optional": false,
        "responseStatus": "accepted",
        "comment": message,
        "additionalGuests": 1
      },
      {
        "email": email,
        "displayName": name,
        "optional": false,
        "responseStatus": "accepted",
        "comment": message,
        "additionalGuests": 1
      }
    ],
    "reminders": {
      "useDefault": false,
      "overrides": [
        {
          "method": "email",
          "minutes": 2
        },
        {
          "method": "popup",
          "minutes": 2
        }
      ]
    }
  }

)

export const addEvent = (params: TEvent) => {
  return new Promise((resolve, reject) => {
    const initiate = () => {
      const payload = event(params);
      gapi.client
        .request({
          path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          method: 'POST',
          body: payload,
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${apiToken}`,
          },
        })
        .then(
          (response) => {
            resolve(response)
          },
          function (err) {
            console.log(err)
            reject(err);
          }
        )
    }
    gapi.load('client', initiate)
  })
}