import { createRealmContext } from "@realm/react";
import {Playlist} from './Playlist';
import { User } from "./User";
import { Track } from "./Track";

export const MusicPlayerRealmContext = createRealmContext({
  schema: [Playlist, User, Track]  
});