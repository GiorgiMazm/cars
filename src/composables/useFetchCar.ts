export default async (id: string) => {
  const { error, data } = await useFetch(`/api/car/${id}`);

  if (error.value) {
    throw createError({
      statusCode: 404,
      statusMessage: `Unable to find car with id ${id}`,
    });
  }

  return data;
};
