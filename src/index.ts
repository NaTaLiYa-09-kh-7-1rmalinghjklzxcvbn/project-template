/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData } from './getStorage.js'
import { handleFormSubmit } from './formData.js'

const avatar = "/img/avatar.png"
const userName = "Wade Warren"
const objectNumber = 3

window.addEventListener('DOMContentLoaded', () => {
  const user = getUserData(userName, avatar, objectNumber)
  renderUserBlock(user.username, user.userAvatar, user.objectNumber)
  renderSearchFormBlock()
  renderSearchStubBlock()
  const applicantForm = document.querySelector<HTMLInputElement>("form")
  if (applicantForm) {
    applicantForm.addEventListener('submit', handleFormSubmit)
  }

  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})

