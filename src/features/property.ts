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
         const {route } = arg

         if (res?.status === 201) {
           route.push('/dashboard/property')
           toast.success('Property was created successfully')
         }
         
        return {res}
      },
         transformErrorResponse: (res: any) => {
          toast.error(
              res?.data.error
            )
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
        const {setEdit} = arg
        if (res?.status === 201) {
          toast.success('Property has been edited successfully')
           setEdit(false)
         }
         
        return {res}
      },
        transformErrorResponse: (res: any) => {
          toast.error(
              res?.data.error
            )
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
    getProperty: builder.query<PropertyProp, string|any>({
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
         const {route, property_id } = arg
         if (res.status === 201) {
           route.push(`/dashboard/property`)
           toast.success( 'Room was created successfully')
         }
         
        return {res}
      },
         transformErrorResponse: (res: any) => {
          toast.error(
              res?.data.error
            )
      },

       
     invalidatesTags:['Property']
    }),
    editRoom: builder.mutation<string, RoomProps>({
      query: ({id, ...data}) => ({
        url: `/room/edit/${id}`,
        method: 'PUT',
        data
      }),
       transformResponse: (res: any, meta, arg:RoomProps): any => {
         const { setEdit } = arg
         if (res.status === 200) {
           setEdit(false)
           toast.success( 'Room was edited successfully')
         }
         
        return {res}
      },
        transformErrorResponse: (res: any) => {
          toast.error(
              res?.data.error
            )
      },
     invalidatesTags:['Property']
    }),
    publishRoom: builder.mutation<string, PublishProp>({
      query: ({id}) => ({
        url: `/room/publish/${id}`,
        method: 'PUT',
      }),
      transformResponse: (res: any): any => {
          toast.success( 'Room has been published successfully')
        return {res}
      },
      transformErrorResponse: (res: any) => {
          toast.error(
              res?.data.error
            )
      },
     invalidatesTags:['Property']
    }),
    unpublishRoom: builder.mutation<string, PublishProp>({
      query: ({id}) => ({
        url: `/room/unpublish/${id}`,
        method: 'PUT',
      }),
      transformResponse: (res: any, meta): any => {
        toast.success( 'Room has been unpublished successfully')
        return {res}
      },
        transformErrorResponse: (res: any) => {
          toast.error(
              res?.data.error
            )
      },
     invalidatesTags:['Property']
    }),
     getRoomByPropertyId: builder.query<RoomProps[], string | any>({
      query: (id) => ({
        url: `/room/property/${id}`,
        method: 'GET',
       }),
       transformResponse: (res: any,): any => {
        return res.data
      },
      providesTags: ['Property']
     }),
     getRoomBySlug: builder.query<RoomProps, string | any>({
      query: (slug) => ({
        url: `/room/slug/${slug}`,
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

export const {useCreatePropertyMutation, useEditRoomMutation, useEditPropertyMutation, useGetPropertiesQuery, useGetPropertyQuery, useCreateRoomMutation, useGetRoomByPropertyIdQuery, useGetRoomByIdQuery, useGetPropertyByUserIdQuery, usePublishRoomMutation, useUnpublishRoomMutation, useGetRoomBySlugQuery} = propertyApi

