import { getItem } from '@/utils'
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getItem("access_token")
    // console.log(">>>>>token", headers);
    
    // headers.set('token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdG9rZW5fZXhwaXJ5IjoxNzA3OTQyNTc1NTYzLCJ1c2VyX2lkIjoiZjA0ZDZmZTItNDkwNS00OTgyLWI5MDctZjc3NGFiNzYzMWFhIn0.xTieKM7PbNdfcswiPIxSMijak2dI_nWnkQ7P1u11Jgs`)
    
    headers.set('Authorization', 'Basic ' + btoa('bookingengine:secretbookingenginesecret'))

    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'splitApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQueryWithRetry,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['Property'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
})

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => 'test',
  }),
})
