export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Dojo ID is required',
    })
  }

  return {
    dojo: {
      id,
      name: 'Example Dojo',
      description: 'This is an example dojo listing.',
      location: 'Example City',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  }
})
