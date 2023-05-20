export default async (city: string, filter: object) => {
  const { error, data, refresh } = await useFetch(`/api/cars/${city}`, {
    params: { ...filter },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch cars",
    });
  }

  return { data, refresh };
};
