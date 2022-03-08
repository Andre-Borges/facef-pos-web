import { getFilmById } from './../../apis/star-wars.api';
import { action, observable } from 'mobx';

export default class StarWarsDetailsStore {
  @observable film: any = {};

  @action buildFilmById = async (id: number) => {
    const { data } = await getFilmById(id);
    this.film = data;
  };
}

const starWarsDetails = new StarWarsDetailsStore();
export { starWarsDetails };
