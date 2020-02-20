import React from 'react'

interface MyProps {

}

interface Starship {
  name: string;
  crew: string;
  passengers: string;
  cost_in_credits?: string;
  url: string;
}

interface MyState {
  starships: Array<Starship>,
  loading: boolean,
  error: boolean
}


class AppDummy extends React.Component<MyProps, MyState> {
  constructor () {
    super();
    this.state = {
      starships: [],
      loading: true,
      error: false
    }
  }

  componentDidMount () {
    fetch('https://swapi.co/api/starships')
      .then(response => response.json())
      .then(response => this.setState({
        starships: response.results,
        loading: false
      }))
      .catch(error => this.setState({
        loading: false,
        error: true
      }))
  }

  render () {
    const {starships, loading, error} = this.state
    return (
      <div>
        {loading && <div>Loading ...</div>}
        {!loading && !error &&
          starships.map(starship => (
            <div key={starship.name}>
              {starship.name}
            </div>
          ))
        }
        {error && <div>Error Message </div>}
      </div>
    )
  }
}

export default AppDummy