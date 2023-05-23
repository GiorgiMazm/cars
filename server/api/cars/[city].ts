import cars from "~/data/cars.json";

export default defineEventHandler((event) => {
  const city = event.context.params?.city;
  const { make, minPrice, maxPrice, miles } = getQuery(event);

  let filteredCars = cars.filter(
    (car) => car.city.toUpperCase() === city?.toUpperCase()
  );
  if (make) {
    filteredCars = filteredCars.filter(
      (car) => car.make.toUpperCase() === String(make).toUpperCase()
    );
  }

  if (minPrice) {
    filteredCars = filteredCars.filter((car) => car.price >= minPrice);
  }
  if (maxPrice) {
    filteredCars = filteredCars.filter((car) => car.price <= maxPrice);
  }
  return filteredCars;
});
