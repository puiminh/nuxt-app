import { Context } from '@nuxt/types'
import { AxiosInstance } from 'axios'
import { Inject } from '@nuxt/types/app'
import { useApi } from '~/core/api'
import type { ApiProxy } from '~/core/api'
import RootApi from '~/api'

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiProxy<typeof RootApi>
  }
}

export default function ({ $axios }: Context, inject: Inject) {
  inject('api', useApi(RootApi, $axios as AxiosInstance))
}