import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PropertyProp } from '../utils/types'
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
        const { toast } = arg
        
        return {res}
      },
     invalidatesTags:['Property']
    }),
     getProperties: builder.query<PropertyProp[], void>({
      query: () => ({
        url: `/property/all`,
        method: 'GET',
       }),
      providesTags: ['Property']
     }),
    getProperty: builder.query<PropertyProp[], string>({
      query: (id) => ({
        url: `/property/account/${id}`,
        method: 'GET',
      }),
      providesTags: ['Property']
    })
  })
})

export const {useCreatePropertyMutation, useGetPropertiesQuery, useGetPropertyQuery} = propertyApi

