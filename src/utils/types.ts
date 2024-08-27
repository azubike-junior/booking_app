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
    toast?: any, 
    id: string
    firstname: string
    lastname: string
    email: string
    country_code?: string
    mobilenumber: string
    access_token?: string
    refresh_token?: string
    account_type?: number
    type?: string
    account_status?: number,
    status?:  string
    verification_status?: number
    ver_status?: string
    current_subscription?: string
}

export type PropertyProp = {
  length: number
  toast?: any
  route?: any
  id?: string
  description?: string
  address?: string
  name?: string
  number_of_rooms?: number
  logo?: string
  primary_color?: string
  text_color?: string,
  secondary_color?: string
  phone_number?: string,
  email_address?: string,
  web_address?: string
  image?: string
  image_two?:string
  image_three?:string
  country?: string
  account_number: string
  currency: string
  payment_link?: string
  bank: string
  setEdit?: any
  whatsapp_number: string
  facebook_pixel_id: string
  google_tag_manager_id: string
  booking_policy?: string
}


export type RoomProps = {
  toast?: any
  route?: any
  setEdit?: any
  id?: any
  property_name?: string
  property_id?: string,
  description: string
  slug?: string
  name: string,
  size: string,
  price?: number,
  adults: number,
  mode?: number,
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
  air_conditioner:  number
  balcony:  number
  bed_breakfast:  number
  bathroom_telephone:  number
  smoke_detector:  number
  hair_dryer:  number
  guest_amenities:  number
  magnifying_mirror: number
  payment_link: string
}

export type PublishProp = {
  id?: string 
}

export type StepProps = {
  step: number
  setStep: (step:number) => void
}

export type PaymentProps = {
  toast?: any
  route?: any
  email?: string
  phonenumber?: string,
  amount?: number,
  property_id?: string | any,
  first_name?: string
  last_name?: string,
  orders?: RoomOrderProp[]
  account_id?: string
  type: string
  sub_id?: string
  sub_duration?: number
  trigger?: any
  }

export type ReservationProps = {
    id: string
    room_id:string
    property_id: string
    room_name: string
    start_date:string
    end_date:string
    status: number
    status_str: string
    first_name: string
    last_name: string
    other_names: string
    phone: string
    email: string
    created_at: string
    updated_at: string
    payment_reference: string
    payment_status:string
}

export type ReservationRes = {
  data: ReservationProps[]
  message: string
}

export type RoomOrderProp = {
  room_id: string
  room_name: string
  start_date: string
  end_date: string
  price: number
  index: number
  quantity: number
  image: string
  adults?: number
  children?: number
  resIndex?: number
}

export type SubscriptionProp = {
  id: string
  name: string
  annual_cost: number
  monthly_cost: number
  room_category_allowed: number
  bookings: number
  pay_on_arrival: number
  pay_online: number
  show_booking_history: number
  booking_data_download: number
  show_property_contact: number
  allow_custom_branding: number
  technical_support: number
  google_hotel_ads: number
  microsoft_hotel_ads: number
  free_dedicated_ads: number
  support_google_note: number
  support_microsoft_note: number
}

export type CouponProp = {
  name: string
  description: string
  property_id?: string
  discount_percentage: number
  setOpenCoupon: (open: boolean) => void
}

export type _Coupon = {
  name: string
  description: string
  property_id: string
  discount_percentage: number
}