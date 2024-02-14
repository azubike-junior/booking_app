export type FormValues = {
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