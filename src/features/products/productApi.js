import { mainApi } from "../../app/mainApi";



export const productApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({

    getProducts: builder.query({
      query: (query) => ({
        url: '/products',
        method: 'GET',
        params: query
      }),
      providesTags: ['Product']
    }),

    getTop5Products: builder.query({
      query: (query) => ({
        url: '/products/top-5',
        method: 'GET',
      }),
      providesTags: ['Product']
    }),

    addProduct: builder.mutation({
      query: (query) => ({
        url: '/products',
        method: 'POST',
        body: query.body,
        headers: {
          Authorization: query.token
        }
      }),
      invalidatesTags: ['Product']
    }),


    removeProduct: builder.mutation({
      query: (q) => ({
        url: `/products/${q.id}`,
        method: 'DELETE',
        headers: {
          Authorization: q.token
        }
      }),
      invalidatesTags: ['Product']
    }),





  })

});


export const { useGetProductsQuery, useGetTop5ProductsQuery, useAddProductMutation, useRemoveProductMutation } = productApi;