console.log(
  'process.env.NEXT_PUBLIC_SHOW_ADMIN: ',
  process.env.NEXT_PUBLIC_SHOW_ADMIN,
)
const featureFlags = {
  showAdmin: process.env.NEXT_PUBLIC_SHOW_ADMIN === 'true',
}

export default featureFlags
