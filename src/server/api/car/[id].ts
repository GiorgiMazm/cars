import cars from "../../../data/cars.json";

export default defineEventHandler((event) => {
  const id = event.context.params?.id;
  return cars.find((car) => car.id === parseInt(String(id)));
});
