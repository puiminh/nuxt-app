import UserApi from './user'
import { BaseApi } from '~/core/api'

export default class RootApi extends BaseApi {
    deps = {
        user: UserApi,
    }
}
