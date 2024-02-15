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
      providesTags: ['Property']
     }),
    getProperty: builder.query<PropertyProp, string>({
      query: (id) => ({
        url: `/property/find/${id}`,
        method: 'GET',
      }),
      providesTags: ['Property']
    })
  })
})

export const {useCreatePropertyMutation, useGetPropertiesQuery, useGetPropertyQuery} = propertyApi

