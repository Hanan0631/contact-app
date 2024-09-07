const inputs = [
  {
    type: "text",
    name: "name",
    placeholder: "نام و نام خانوادگی *",
  },
  {
    type: "email",
    name: "email",
    placeholder: "ایمیل *",
  },
  {
    type: "number",
    name: "phone",
    placeholder: "تلفن همراه *",
  },
  { type: "text", name: "job", placeholder: "شغل" },
];

const regName = /^[\u0600-\u06FF\s]+$|^[a-zA-Z ]+$/;

const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const regPhone = /^09\d{9}$/;

export { inputs, regName, regEmail, regPhone };
