import axios from "axios";

export type TEvent = { serviceName: string; date: string; message: string; email: string; name: string; endDate: string }

export const event = ({ serviceName, date, message, email, name, endDate }: TEvent) => (
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

// export const addEvent = (params: TEvent) => {
//   return new Promise((resolve, reject) => {
//     const initiate = () => {
//       const payload = event(params);
//       gapi.client
//         .request({
//           path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
//           method: 'POST',
//           body: payload,
//           headers: {
//             'Content-type': 'application/json',
//             Authorization: `Bearer ${apiToken}`,
//           },
//         })
//         .then(
//           (response) => {
//             resolve(response)
//           },
//           function (err) {
//             console.log(err)
//             reject(err);
//           }
//         )
//     }
//     gapi.load('client', initiate)
//   })
// }

export const sendWhatsAppMessage = async () => {
  const accessToken = "YOUR_FACEBOOK_ACCESS_TOKEN";
  const phoneNumberId = "YOUR_PHONE_NUMBER_ID";

  const messageData = {
    messaging_product: "whatsapp",
    to: "91XXXXXXXXXX",
    text: { body: "Hello from WhatsApp Cloud API!" },
  };

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v16.0/${phoneNumberId}/messages`,
      messageData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error?.response?.data);
  }
};
