import { PropertyProp, RoomProps } from '../utils/types'
import { api } from './api'

export const propertyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProperty: builder.mutation<string, PropertyProp>({
      query: (body) => ({
        url: `/property/create`,
        method: 'POST',
        body
      }),
       transformResponse: (res, meta, arg:PropertyProp): any => {
         const { toast, route } = arg

         if (meta?.response?.status === 201) {
           route.push('/properties')
           toast({
                title: 'Property was created successfully',
                description: '',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            })
         }
         
        return {res}
      },
     invalidatesTags:['Property']
    }),
     getProperties: builder.query<PropertyProp[], void>({
      query: () => ({
        url: `/property/all`,
        method: 'GET',
       }),
      providesTags: ['Property',]
     }),
    getProperty: builder.query<PropertyProp, string>({
      query: (id) => ({
        url: `/property/find/${id}`,
        method: 'GET',
      }),
      providesTags: ['Property']
    }),
     createRoom: builder.mutation<string, RoomProps>({
      query: (body) => ({
        url: `/room/create`,
        method: 'POST',
        body
      }),
       transformResponse: (res, meta, arg:RoomProps): any => {
         const { toast, route, property_id } = arg

         console.log(">>>>>properties id", property_id);
         

         if (meta?.response?.status === 201) {
           route.push(`/properties/${property_id}`)
           toast({
                title: 'Room was created successfully',
                description: '',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            })
         }
         
        return {res}
      },
     invalidatesTags:['Property']
    }),
     getRoomByPropertyId: builder.query<RoomProps[], string>({
      query: (id) => ({
        url: `/room/property/${id}`,
        method: 'GET',
      }),
      providesTags: ['Property']
    })
  })
})

export const {useCreatePropertyMutation, useGetPropertiesQuery, useGetPropertyQuery, useCreateRoomMutation, useGetRoomByPropertyIdQuery} = propertyApi

