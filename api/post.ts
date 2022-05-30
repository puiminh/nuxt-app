import { BaseApi } from '~/core/api'

export default class PostApi extends BaseApi {
  makePost(id: number) {
    return this.axios.post('/makePost', { id });
  }
}
