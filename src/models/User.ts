import Realm from "realm"
import { Playlist } from "../../types";

export class User extends Realm.Object<User> {
    id!: string;
    name!: string;
    email!: string;
    playlist?: Playlist[];
    constructor(
        realm: Realm, 
        id: string,
        name: string, 
        email: string, 
        playlist: Playlist[]) {
            super(realm, 
                {
                    id: id || '_SYNC_DISABLED_', 
                    name: name, 
                    email: email, 
                    playlist: playlist,
                });
            } 
  };