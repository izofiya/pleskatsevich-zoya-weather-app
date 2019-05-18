import React from "react";
import Title from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";

const API = "11946a85ee67815615487da027c7e9d1";
const API2 = "a49328c7264e433eb4f142910191705";
class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    error: undefined,
    temp2: undefined,
    city2: undefined,
    country2: undefined,
    wind2: undefined,
    error2: undefined,
    isActiveOpenWeatherMap: false,
    isActiveApixu: false
  }

  gettingWeather = async (evt) => {
    evt.preventDefault();
    const city = evt.target.elements.city.value;
      
    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
      const data = await api_url.json();
      
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        wind: data.wind.speed,
        error: undefined,
        time: true
      });
      } else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          wind: undefined,
          error: "Enter the name of the city!"
        });
      }
  }

  gettingWeatherApixu = async (evt) => {
    evt.preventDefault();
    const city = evt.target.elements.city.value;
        
    if(city) {
      const api_url = await fetch(`https://api.apixu.com/v1/current.json?key=${API2}&q=${city}`);
      const data = await api_url.json();
      this.setState({
        temp2: data.current.temp_c,
        city2: data.location.name,
        country2: data.location.country,
        wind2: data.current.wind_mph,
        error2: undefined
      });
      } else {
        this.setState({
          temp2: undefined,
          city2: undefined,
          country2: undefined,
          wind2: undefined,
          error2: "Enter the name of the city!"
        });
      }
  }

  getOpenWeatherMap = () => {
    this.setState({
      isActiveOpenWeatherMap: !this.state.isActiveOpenWeatherMap
    });
  }

  getApixu = () => {
    this.setState({
      isActiveApixu: !this.state.isActiveApixu
    });
  } 

  render() {
    return (
      <div className="mainDiv">
        <h1>Select weather service</h1>
        <button onClick={this.getOpenWeatherMap}>Follow OpenWeatherMap</button>
        <button onClick={this.getApixu}>Follow Apixu</button>
        { this.state.isActiveOpenWeatherMap ? 
        (<div>
        <Title site="OpenWeatherMap"/>
        <Form weatherMethod={this.gettingWeather}/>
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          wind={this.state.wind}
          error={this.state.error}
        />
        </div>) : null}
        { this.state.isActiveApixu ? 
        (<div>
        <Title site="Apixu"/>
        <Form weatherMethod={this.gettingWeatherApixu}/>
        <Weather
          temp={this.state.temp2}
          city={this.state.city2}
          country={this.state.country2}
          wind={this.state.wind2}
          error={this.state.error2}
        />
        </div>) : null}
      </div>
    );
  }
}
export default App;
