import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

const avatar = "/img/avatar.png"
const userName = "Wade Warren"
const objectNumber = 0
window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(userName, avatar, objectNumber)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
