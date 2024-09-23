import Realm from "realm"

export class Track extends Realm.Object<Track> {
    id!: string;
    title!: string;
    artist!: string;
    album?: string;
    genre?: string;
    duration!: number;
    url!: string;
    artwork?: string;
    constructor(
        realm: Realm, 
        id: string,
        title: string, 
        artist: string, 
        album: string,
        genre: string,
        duration: number,
        url: string,
        artwork: string) {
            super(realm, 
                {
                    id: id || '_SYNC_DISABLED_', 
                    title: title, 
                    artist: artist, 
                    album: album, 
                    genre: genre,
                    duration: duration,
                    url: url,
                    artwork: artwork
                });
            } 
  };