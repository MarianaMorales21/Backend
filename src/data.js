export const data = {
  material: [
    {
      id: "521S",
      name: "Tierra Roja",
      characteristics: "Color rojiso",
      cost_per_unit: "0.25",
      cost_per_kilometer: "0.50",
      status: "Available",
    },
    {
      id: "58SA",
      name: "Tierra Cobre",
      characteristics: "Aspecto cobrizo",
      cost_per_unit: "0.30",
      cost_per_kilometer: "0.55",
      status: "Available",
    },
    {
      id: "5652",
      name: "Arena",
      characteristics: "Arenosa",
      cost_per_unit: "0.90",
      cost_per_kilometer: "0.87",
      status: "Available",
    },
  ],
  schedule: [
    {
      id: "1",
      entry_time: "07:00:00",
      exit_time: "16:00:00",
    },
    {
      id: "2",
      entry_time: "08:00:00",
      exit_time: "17:00:00",
    },
    {
      id: "3",
      entry_time: "09:00:00",
      exit_time: "18:00:00",
    },
  ],
  model: [
    {
      id: "1",
      name_brand: "Mercedes",
      year_of_creation: 1995,
      color: "Rojo",
      capacity: "300HP",
      fuel: "Gasoil",
    },
    {
      id: "2",
      name_brand: "Volvo",
      year_of_creation: 2002,
      color: "Azul",
      capacity: "350HP",
      fuel: "Gasolina",
    },
    {
      id: "3",
      name_brand: "Scania",
      year_of_creation: 2010,
      color: "Blanco",
      capacity: "400HP",
      fuel: "Gasoil",
    },
  ],
  day: [
    {
      id: "1",
      name: "Lunes",
    },
    {
      id: "2",
      name: "Martes",
    },
    {
      id: "3",
      name: "Miércoles",
    },
  ],
  users: [
    {
      id: "1",
      name: "Mariana Morales",
      username: "mariana12",
      email: "park635-th@huskrm.com",
      role: "1",
      status: "Active",
      password: "zzz",
      address: "sdfsdf",
      phone: "04121617297",
      dni: "asas",
    },
    {
      id: "2",
      name: "Adrian Vergel",
      username: "adrian123",
      email: "marianamorales2110@gmail.com",
      role: "2",
      status: "Active",
      password: "mfmf",
      address: "dasdas",
      phone: "1234213",
      dni: "32433",
    },
    {
      id: "3",
      name: "Marta Morantes",
      email: "pa@huskrm.com",
      role: "1",
      status: "Active",
      password: "sdff",
      address: "fuuf",
      phone: "041255565",
      username: "marta125",
      dni: "5000",
    },
    {
      id: "4",
      name: "Ricardo Colmenares",
      email: "ricar2110@gmail.com",
      role: "2",
      status: "Active",
      password: "papapapa",
      address: "Cordero",
      phone: "04121617297",
      username: "ricardo543",
      dni: "30781815",
    },
    {
      id: "5",
      name: "Jose Andres",
      email: "jose12@gmail.com",
      role: "1",
      status: "Active",
      password: "12345",
      address: "Tariba",
      phone: "04147532683",
      username: "jose542",
      dni: "25754258",
    },
  ],
  role: [
    {
        id:"1",
        name:"Driver"
    },
    {
        id:"2",
        name:"Client"
    },
    {
        id:"3",
        name:"Admin"
    },
  ],
  driver: [
    {
      id: "1",
      user_id: "1",
      limitations: "Cardiology",
      date_of_issue: "2024-10-27",
      expiration_date: "2024-11-24",
      sex: "Female",
      grade_license: "Quinta",
    },
    {
      id: "2",
      user_id: "3",
      limitations: "Spectacles",
      date_of_issue: "2024-11-06",
      expiration_date: "2024-12-07",
      sex: "Female",
      grade_license: "Fifth",
    },
  ],
  truck: [
    {
      id: "1",
      driver_id: "1",
      operational: "Inactive",
      usage_reports: "Mantenimiento de frenos",
      mileage: "25",
      model_id: "2",
    },
    {
      id: "2",
      driver_id: "2",
      operational: "Active",
      usage_reports: "Cambio de aceite",
      mileage: "500",
      model_id: "2",
    },
    {
      id: "3",
      driver_id: "2",
      operational: "Active",
      usage_reports: "Totalmente Operacional",
      mileage: "250",
      model_id: "2",
    },
  ],
  client: [
    {
      id: "1",
      type: "Enterprise",
      user_id: "2",
    },
    {
      id: "2",
      type: "Government",
      user_id: "4",
    },
  ],
  driver_schedule: [
    {
      id: "8d6b",
      entry_time: "08:00:00",
      exit_time: "17:00:00",
      day_id: "2",
      driver_id: "e035D",
      schedule_id: "2",
    },
    {
      id: "9de5",
      entry_time: "07:00:00",
      exit_time: "16:00:00",
      day_id: "3",
      driver_id: "e035D",
      schedule_id: "1",
    },
    {
      id: "e1a7",
      entry_time: "07:00:00",
      exit_time: "16:00:00",
      day_id: "1",
      driver_id: "e035D",
      schedule_id: "1",
    },
    {
      id: "1628",
      entry_time: "07:00:00",
      exit_time: "16:00:00",
      day_id: "2",
      driver_id: "765cD",
      schedule_id: "1",
    },
    {
      id: "2af2",
      entry_time: "07:00:00",
      exit_time: "16:00:00",
      day_id: "1",
      driver_id: "765cD",
      schedule_id: "1",
    },
  ],
  order: [
    {
      id: "1",
      order_date: "2024-01-01",
      total_delivery_date: "2024-01-10",
      status: "En Proceso",
      client_id: 1,
      created_at: "CURRENT_TIMESTAMP",
      updated_at: "CURRENT_TIMESTAMP",
    },
  ],
  order_details: [
    {
      id: "1",
      order_id: 1,
      material_id: 1,
      quantity_of_material: 5,
      delivery_date: "2024-01-10",
      created_at: "CURRENT_TIMESTAMP",
      updated_at: "CURRENT_TIMESTAMP",
    },
  ],
  trips: [
    {
      id: "1",
      truck_id: 1,
      trip_duration: "02:30:00",
      trip_description: "Entrega de arena",
      distancia_to_travel: 150,
      destination_address: "Calle 123, Ciudad A",
      order_details_id: 1,
      created_at: "CURRENT_TIMESTAMP",
      updated_at: "CURRENT_TIMESTAMP",
    },
  ],
  payment_method: [
    {
      id: "1",
      type: "Tarjeta de Crédito",
      description: "Pago mediante tarjeta de crédito",
    },
    {
      id: "2",
      type: "Tarjeta de Débito",
      description: "Pago mediante tarjeta de débito",
    },
    {
      id: "3",
      type: "Transferencia Bancaria",
      description: "Pago mediante transferencia bancaria",
    },
  ],
  bill: [
    {
      id: "1",
      order_id: 1,
      payment_date: "2024-01-10",
      payment_method_id: 1,
      amount_to_pay: 1500,
      created_at: "CURRENT_TIMESTAMP",
      updated_at: "CURRENT_TIMESTAMP",
    },
  ],
  invoice_details: [
    {
      id: "1",
      bill_id: 1,
      details_order_id: 1,
      transportation_cost: 500,
      material_cost: 1000,
      total_cost_of_the_trip: 1500,
      created_at: "CURRENT_TIMESTAMP",
      updated_at: "CURRENT_TIMESTAMP",
    },
  ],
};
