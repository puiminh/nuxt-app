import { BaseApi } from '~/core/api'

export default class UserApi extends BaseApi {
  async createPost(title: string, body: string) {
    return await this.axios.post('/api/post', {title, body})
    //return {"abc": "xyz"}
  }
}
