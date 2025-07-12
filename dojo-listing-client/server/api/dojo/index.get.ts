export default defineEventHandler(async (_event) => {
  return [
    {
      id: '1',
      name: 'Example Dojo 1',
      description: 'This is the first example dojo listing.',
      location: 'Example City 1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Example Dojo 2',
      description: 'This is the second example dojo listing.',
      location: 'Example City 2',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '3',
      name: 'Example Dojo 3',
      description: 'This is the third example dojo listing.',
      location: 'Example City 3',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]
})
