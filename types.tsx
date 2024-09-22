import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Track = {
    id: string | never,
    url: string,
    title: string,
    artist: string,
    artwork: string, 
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