import * as api from '../api'
import * as types from '../mutation'

// CompanyModel

const state = {
  name: '',
  rank: null,
  url: null,
  tel: null,
  is_hidden: false,
  order: null,
  id: null,
}

const actions = {
  checkout ({ commit, state }, companies) {
    const savedCompanyItems = [...state.added]
    commit(types.CHECKOUT_MEDIA_MODEL_REQUEST)
    CompanyTaskAPI.add(
      companies,
      () => commit(types.CHECKOUT_MEDIA_MODEL_SUCCESS),
      () => commit(types.CHECKOUT_MEDIA_MODEL_FAILURE, { savedCompanyItems })
    )
  }
}
