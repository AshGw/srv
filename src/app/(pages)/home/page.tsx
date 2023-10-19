import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import  FullDropDownMenue  from '@/app/components/reusables/full-drop-down'

export default function Home() {
  return (
    <div className="container">
      <main className='p-5 m-5'>
      </main>
      <FullDropDownMenue mt-5></FullDropDownMenue>
    </div>
  )
}
