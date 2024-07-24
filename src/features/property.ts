import { PropertyProp, PublishProp, RoomProps } from '../utils/types'
import { api } from './api'

export const propertyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProperty: builder.mutation<string, PropertyProp>({
      query: (data) => ({
        url: `/property/create`,
        method: 'POST',
        data
      }),
       transformResponse: (res:any, meta, arg:PropertyProp): any => {
         const { toast, route } = arg

         if (res?.status === 201) {
           route.push('/dashboard/property')
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
    editProperty: builder.mutation<string, PropertyProp>({
      query: ({id, ...body}) => ({
        url: `/property/edit/${id}`,
        method: 'PATCH',
        body
      }),
       transformResponse: (res, meta, arg:PropertyProp): any => {
         const { toast, route } = arg

         if (meta?.response?.status === 201) {
           route.push('/properties')
           toast({
                title: 'Property has been edited successfully',
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
    getProperties: builder.query<PropertyProp[], string>({
      query: (id) => ({
        url: `/property/account/${id}`,
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
     getPropertyByUserId: builder.query<PropertyProp[], string>({
      query: (id) => ({
        url: `/property/account/${id}`,
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
    editRoom: builder.mutation<string, RoomProps>({
      query: ({id, ...body}) => ({
        url: `/room/edit/${id}`,
        method: 'PUT',
        body
      }),
       transformResponse: (res, meta, arg:RoomProps): any => {
         const { toast, route } = arg
         if (meta?.response?.status === 200) {
           toast({
                title: 'Room has been publish successfully',
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
    publishRoom: builder.mutation<string, PublishProp>({
      query: ({id}) => ({
        url: `/room/publish/${id}`,
        method: 'PUT',
      }),
       transformResponse: (res, meta, arg:PublishProp): any => {
         const { toast} = arg
         if (meta?.response?.status === 200) {
           toast({
                title: 'Room has been published successfully',
                description: '',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            })
         }
         
        return {res}
      },
     invalidatesTags:['Property']
    }),
    unpublishRoom: builder.mutation<string, PublishProp>({
      query: ({id}) => ({
        url: `/room/unpublish/${id}`,
        method: 'PUT',
      }),
       transformResponse: (res, meta, arg:PublishProp): any => {
         const { toast} = arg
         if (meta?.response?.status === 200) {
           toast({
                title: 'Room has been unpublished successfully',
                description: '',
                status: 'success',
                duration: 5000,
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
     }),
     getRoomById: builder.query<RoomProps, string>({
      query: (id) => ({
        url: `/room/find/${id}`,
        method: 'GET',
      }),
      providesTags: ['Property']
    })
  })
})

export const {useCreatePropertyMutation, useEditRoomMutation, useEditPropertyMutation, useGetPropertiesQuery, useGetPropertyQuery, useCreateRoomMutation, useGetRoomByPropertyIdQuery, useGetRoomByIdQuery, useGetPropertyByUserIdQuery, usePublishRoomMutation, useUnpublishRoomMutation} = propertyApi

