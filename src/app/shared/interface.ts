export interface DataForCharts {
  ids: number[];
  registrations: Sensor[]
}

export interface Extremum {
  max: number;
  min: number;
}

export interface Sensor {
  date: number;
  temperature: number;
  sensorId: number;
  region: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
