import { renderBlock } from './lib.js'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import moment from '../node_modules/moment/dist/moment.js';

export const arrivalDay = moment().add(1, 'days').format('YYYY-MM-DD')
export const departDay = moment(arrivalDay).add(2, 'days').format('YYYY-MM-DD')
export function renderSearchFormBlock() {
  const dateNow = moment().format('YYYY-MM-DD');

  const lastDay = moment().startOf('month').add(2, 'months').add(-1, 'days').format('YYYY-MM-DD')

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" name="city" value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${arrivalDay}" min="${dateNow}" max="${lastDay}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
        <input id="check-out-date" type="date" value="${departDay}" min="${dateNow}" max="${lastDay}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
