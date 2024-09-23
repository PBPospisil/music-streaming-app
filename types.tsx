import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Track = {
    id: string,
    url: string,
    title: string,
    artist: string,
    artwork: string, 
}

export type Playlist = {
    id: string,
    name: string,
    tracks: Track[],
    createdOn: Date,
    updatedOn: Date
}

export type User = {
    id: string,
    name: string,
    email: string,
    playlists: Playlist[],
}

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type PlayerScreenNavigationProp = RouteProp<RootStackParamList, 'Player'>

export type PlayerScreenProps = {
    route: PlayerScreenNavigationProp;
}

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Player: { track: Track };
};