import toast from 'react-hot-toast';
import { PropertyProp, PublishProp, RoomProps } from '../utils/types';
import { api } from './api';


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
           toast.success('Property was created successfully')
         }
         
        return {res}
      },
     invalidatesTags:['Property']
    }),
    editProperty: builder.mutation<string, PropertyProp>({
      query: ({id, ...data}) => ({
        url: `/property/edit/${id}`,
        method: 'PATCH',
        data
      }),
      transformResponse: (res: any, meta, arg: PropertyProp): any => {
         
        console.log(">>>>>res", res);

        const {setEdit} = arg
        

        if (res?.status === 201) {
          toast.success('Property has been edited successfully')
           setEdit(false)
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
       transformResponse: (res: any): any => {
        return res.data
      },
      providesTags: ['Property',]
     }),
    getProperty: builder.query<PropertyProp, string>({
      query: (id) => ({
        url: `/property/find/${id}`,
        method: 'GET',
      }),
       transformResponse: (res: any): any => {
        return res.data
      },
      providesTags: ['Property']
    }),
     getPropertyByUserId: builder.query<PropertyProp[], string>({
      query: (id) => ({
        url: `/property/account/${id}`,
        method: 'GET',
       }),
        transformResponse: (res: any): any => {
        return res.data
      },
      providesTags: ['Property']
    }),
    createRoom: builder.mutation<string, RoomProps>({
      query: (data) => ({
        url: `/room/create`,
        method: 'POST',
        data
      }),
       transformResponse: (res: any, meta, arg:RoomProps): any => {
         const { toast, route, property_id } = arg
         if (res.status === 201) {
           route.push(`/dashboard/property`)

           toast.success( 'Room was created successfully')

           
          
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
       transformResponse: (res: any, meta, arg:RoomProps): any => {
         const { toast, route } = arg
         if (res.status === 200) {
           route.push(`/dashboard/property`)
           toast.success( 'Room was edited successfully')
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
       transformResponse: (res: any): any => {
        return {res}
      },
     invalidatesTags:['Property']
    }),
    unpublishRoom: builder.mutation<string, PublishProp>({
      query: ({id}) => ({
        url: `/room/unpublish/${id}`,
        method: 'PUT',
      }),
       transformResponse: (res: any, meta): any => {
        return {res}
      },
     invalidatesTags:['Property']
    }),
     getRoomByPropertyId: builder.query<RoomProps[], string>({
      query: (id) => ({
        url: `/room/property/${id}`,
        method: 'GET',
       }),
       transformResponse: (res: any,): any => {
        return res.data
      },
      providesTags: ['Property']
     }),
     getRoomById: builder.query<RoomProps, string>({
      query: (id) => ({
        url: `/room/find/${id}`,
        method: 'GET',
       }),
        transformResponse: (res: any): any => {
        return res.data
      },
      providesTags: ['Property']
    })
  })
})

export const {useCreatePropertyMutation, useEditRoomMutation, useEditPropertyMutation, useGetPropertiesQuery, useGetPropertyQuery, useCreateRoomMutation, useGetRoomByPropertyIdQuery, useGetRoomByIdQuery, useGetPropertyByUserIdQuery, usePublishRoomMutation, useUnpublishRoomMutation} = propertyApi

