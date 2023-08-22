import { createStore } from "vuex";

export default createStore({
  state: {
    title: "Medical emergency",
    team: {
      nurse: "Nurse name",
      rescuer: "Rescuer name",
      doctor: "Doctor name",
      car: "Car number",
      phone: "Phone number",
      medicalKit: "Kit number",
    },
    nurses: [
      { id: 1, name: "Mickel", scale: "12x36" },
      { id: 2, name: "Maria", scale: "12x36" },
      { id: 3, name: "Ana", scale: "24x48" },
      { id: 4, name: "José", scale: "24x48" },
    ],
    rescuers: [
      { id: 1, name: "Marcos", shift: "manhã" },
      { id: 2, name: "Felipe", shift: "tarde" },
      { id: 3, name: "Cláudia", shift: "tarde" },
      { id: 4, name: "Michele", shift: "noite" },
    ],
    doctors: [
      { id: 1, name: "André", scale: "12x36" },
      { id: 2, name: "Roberta", scale: "12x36" },
      { id: 3, name: "Carlos", scale: "24x48" },
      { id: 4, name: "Juliana", scale: "24x48" },
    ],
    equipment: {
      cars: [
        { id: 1, plate: "ABC-0000" },
        { id: 2, plate: "BRA1A11" },
        { id: 3, plate: "CBA-1111" },
        { id: 4, plate: "ARB2B22" },
      ],
      phones: [
        { id: 1, phone: "+55 11 98888-8888" },
        { id: 2, phone: "+55 11 97777-7777" },
        { id: 3, phone: "+55 11 96666-6666" },
        { id: 4, phone: "+55 11 95555-5555" },
      ],
      medicalKits: [
        { id: 1, kit: "K0001" },
        { id: 2, kit: "K0002" },
        { id: 3, kit: "K0003" },
        { id: 4, kit: "K0004" },
      ],
    },
  },
});
