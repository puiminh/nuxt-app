/* eslint-disable no-use-before-define */
import { AxiosInstance } from 'axios'

type ApiInstance = {
  axios: AxiosInstance
  deps: { [id: string]: ApiInstanceConstructor }
}

type DependableType = {
  deps: { [id: string]: DependableTypeConstructor }
}

type DependableTypeConstructor = {
  new (axios: AxiosInstance): DependableType
}

type ApiInstanceConstructor = {
  new (axios: AxiosInstance): ApiInstance
}

type DependenciesOf<T> = T extends DependableType ? T['deps'] : never
type InstanceTypeOfDependenciesOf<T> = T extends {
  [id: string]: DependableTypeConstructor
}
  ? {
      [P in keyof T]: ApiProxy<T[P]>
    }
  : never

export type ApiProxy<X extends DependableTypeConstructor> =
  InstanceTypeOfDependenciesOf<DependenciesOf<InstanceType<X>>> &
    InstanceType<X>

function makeProxy(instance: ApiInstance): ApiProxy<ApiInstanceConstructor> {
  return new Proxy(instance, {
    get(target, prop: string, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver)
      }

      if (prop in receiver) {
        return receiver[prop]
      }

      if (prop in instance.deps) {
        receiver[prop] = makeProxy(new instance.deps[prop](target.axios))
        return receiver[prop]
      }
    },
  }) as any
}

function useApi<X extends ApiInstanceConstructor>(
  ApiType: X,
  axios: AxiosInstance
): ApiProxy<X> {
  return makeProxy(new ApiType(axios)) as any
}

abstract class ApiClass {
  axios: AxiosInstance
  deps: { [id: string]: ApiInstanceConstructor }
  constructor(axios: AxiosInstance) {
    this.axios = axios
    this.deps = {}
  }
}

const BaseApi: typeof ApiClass = <any>(
  function (this: ApiClass, axios: AxiosInstance) {
    this.axios = axios
    this.deps = {}
  }
)

export { BaseApi, useApi }