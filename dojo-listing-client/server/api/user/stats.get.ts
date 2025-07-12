// This is just an example of how to protect an API route.

export default defineEventHandler(async (event) => {
  // make sure the user is logged in
  // throw a 401 error if not
  const { user } = await requireUserSession(event)

  // TODO: Fetch some stats based on the user
  console.log('Fetching stats for user:', user)

  return { stats: { totalListings: 42, activeListings: 10 } }
})
