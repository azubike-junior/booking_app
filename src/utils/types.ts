export type FormValues = {
   router?: any
  toast?: any
  firstname?: string
  lastname?: string
  email: string
  password: string
  phonenumber?: string
  confirmPassword?: string
}

export type LoginResponse = {
    id: string
    firstname: string
    lastname: string
    email: string
    country_code: string
    mobilenumber: string
    access_token: string
    refresh_token: string
    account_type: number
    type: string
    account_status: number,
    status:  string
    verification_status: number
    ver_status: string
}

export type PropertyProp = {
  toast?: any
  route?: any
  id: string
    address: string
    name: string
    number_of_rooms: number
    logo: string
    primary_color: string
    text_color: string,
    secondary_color: string
    phone_number: string,
    email_address: string,
    web_address: string
    image:string
    country: string
}

export type RoomProps = {
  toast?: any
  route?: any
  id?: string
  property_id: string,
  name: string,
  size: string,
  price: number,
  adults: number,
  mode: number,
  children: number,
  wakeup_call: number,
  flat_tv: number
  laundry: number
  internet: number
  room_service_24h: number
  intercom: number
  bedside_fridge: number
  category: number
  image_one?: string
  image_two?: string
  image_three?: string,
  reserved?: number
  published?: number
  mode_str?: string,
}