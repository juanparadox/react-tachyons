import React from "react";

let checkboxList = [
  {
    id: 'spacejam',
    value: 'spacejam',
    text: 'Space Jam'
  },
  {
    id: 'airbud',
    value: 'airbud',
    text: 'Air Bud'
  },
  {
    id: 'hocuspocus',
    value: 'hocuspocus',
    text: 'Hocus Pocus'
  },
  {
    id: 'diehard',
    value: 'diehard',
    text: 'Die Hard'
  },
  {
    id: 'primer',
    value: 'primer',
    text: 'Primer'
  },
  {
    id: 'hudsuckerproxy',
    value: 'hudsuckerproxy',
    text: 'Hudsucker Proxy'
  },
  {
    id: 'homealone',
    value: 'homealone',
    text: 'Home Alone'
  }
]

let buildList = (item, index) => 
	(<div className="flex items-center mb2" key={ index }>
      	<input className="mr2" type="checkbox" id={ item.id } value={ item.value }/>
      	<label htmlFor={ item.id } className="lh-copy">{ item.text }</label>
    </div>)

const CheckboxList = ({ id, legend, list }) =>
  	<fieldset id={ id } class="bn">
	    <legend class="fw7 mb2">{ legend }</legend>
	    { list ? list.map(buildList()) : checkboxList.map(buildList()) }
  	</fieldset>

export default CheckboxList
