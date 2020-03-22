import { observable, action, decorate } from 'mobx'
import { createContext } from 'react'

class PlayerStore {
    constructor() {
        console.log('Data store has been initialized')
    }
    
    @observable active = false;
    @observable currentlyPlaying = false;
    @observable playing = false;
    @observable songQueued = false;
    @observable songPlayed = false;
    @observable currentlyPlaying = undefined;
    provider = undefined

    @action changeProvider = (provider) =>{
        
    }
    rooms = [
        {
            id: 1,
            name: 'First Room'
        }
    ]
    @action set_play = (song:string) => {
        this.active = !this.active
    }
    @action play = (song:string) => {
        this.playing = true
    }
    @action togglePlayback = () => {
        this.playing = !this.playing
    }    
}
export const createPlayerStore = () => {
    console.log("player store created");
    return new PlayerStore();
  };
// export default createContext(new PlayerStore())