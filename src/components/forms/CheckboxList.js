import React from "react";

let buildList = (item, index) => 
	(<div className="flex items-center mb2" key={ index }>
      	<input className="mr2" type="checkbox" id={ item.id } value={ item.value }/>
      	<label htmlFor={ item.id } className="lh-copy">{ item.text }</label>
    </div>)

const CheckboxList = ({ id, legend, list }) =>
  	<fieldset id={ id } className="bn">
	    <legend className="fw7 mb2">{ legend }</legend>
	    { list.map(buildList) }
  	</fieldset>

// Specifies the default values for props:
CheckboxList.defaultProps = {
  id: "favorite_movies",
  legend: "Favorite Movies",
  list: [
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
};

CheckboxList.propTypes = {
  id: React.PropTypes.string,
  legend: React.PropTypes.string,
  list: React.PropTypes.array
}

export default CheckboxList
