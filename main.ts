type Coordinates = { latitude: number; longitude: number}
type Locations = 'home' | 'work' | 'other'
type MyLoaction = Locations | Coordinates

type User = {
  name: string
  userLocation: Locations
}

const user = {
  userLocation: 'home',
  name: 'José'

} satisfies User

console.log(user.userLocation.toUpperCase())

