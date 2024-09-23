import Realm from "realm"
import { Track } from "../../types";

export class Playlist extends Realm.Object<Playlist> {
    id!: string;
    name!: string;
    tracks!: Track[];
    createdOn!: Date;
    updatedOn!: Date;
    constructor(
        realm: Realm, 
        id: string,
        name: string, 
        tracks: Track[], 
        createdOn: Date,
        updatedOn: Date) {
            super(realm, 
                {
                    id: id || '_SYNC_DISABLED_', 
                    name: name, 
                    tracks: tracks, 
                    createdOn: createdOn, 
                    updatedOn: updatedOn,
                });
            } 
  };